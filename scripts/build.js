const chalk = require("chalk");
const fs = require("fs-extra");
const spawn = require("cross-spawn");
const path = require("path");
const ts = require("typescript");

const log = console.log;
const logErro = string => log(chalk.red(string));
const logInfo = string => log(chalk.blue(string));

const resolveRoot = dir => path.resolve(__dirname, "..", dir);

const buildPath = resolveRoot("dist");
const rootPath = resolveRoot("");

const createPkg = async () => {
  const packageContent = await fs.readFile(resolveRoot("package.json"));
  const package = JSON.parse(packageContent);
  const { jest, devDependencies, config, scripts, ...compactPkg } = package;
  delete compactPkg["lint-staged"];

  const newPkg = Object.assign({}, compactPkg, {
    main: "./index.js",
    module: "./index.umd.js"
  });

  return newPkg;
};

const copyFilesToBuild = async () => {
  const filesToCopy = ["LICENSE", "README.md"];
  const toRun = filesToCopy.map(name =>
    fs.copyFile(resolveRoot(name), path.join(buildPath, name))
  );
  await Promise.all(toRun);
  logInfo(`${filesToCopy.join(" and ")} copied to build path with sucess`);
  const pkg = await createPkg();
  await fs.writeFile(path.join(buildPath, "package.json"), JSON.stringify(pkg));
  logInfo("Package.json copied to build path with success");
  await createES6Index();
  logInfo("index.es.js created and copied to build path with success");
  logInfo("Build ended successfully");
  logInfo("Package is avaible on ./dist/ !! Now you can publish it to npm!!");
};

const createES6Index = async () => {
  const fileContent = await fs.readFile(resolveRoot("src/components/index.ts"));
  const result = ts.transpileModule(fileContent.toString(), {
    compilerOptions: { module: ts.ModuleKind.UMD, target: ts.ScriptTarget.ES5 }
  });
  await fs.writeFile(path.join(buildPath, "index.umd.js"), result.outputText);
};

const buildTs = () => {
  logInfo("Building typescript files...");
  const build = spawn("tsc");
  build.stdout.on("erro", error => {
    logErro(error);
    process.exit(1);
  });
  build.stdout.on("data", logInfo);
  build.on("exit", () => {
    logInfo("Typescript build ends with success!");
    copyFilesToBuild();
  });
};

buildTs();

/// <reference types="react" />
import * as React from "react";
export interface IProps {
  msg?: string;
}
export interface IState {
  date: Date;
}
export default class Clock extends React.Component<IProps, IState> {
  private timeId;
  constructor(props: IProps);
  componentDidMount(): void;
  tick(): void;
  componentWillUnmount(): void;
  render(): React.ReactNode;
  private handleTick();
}

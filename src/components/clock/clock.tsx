import * as React from 'react';

export interface IProps {
  msg?: string;
}
export interface IState {
  date: Date;
}


export default class Clock extends React.Component<IProps, IState> {
  timeId: any;
  constructor(props: IProps){
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount(){
    this.timeId = setInterval(()=> this.tick(), 1000);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    const { msg } = this.props;
    const { date } = this.state;

    return (
      <div>
        <h1>{msg}</h1>
        <h2>It is {date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
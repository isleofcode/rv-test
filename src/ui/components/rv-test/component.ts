import Component, { tracked } from "@glimmer/component";

export default class RvTest extends Component {
  @tracked data: any = {};
  private socket: WebSocket = null;

  didInsertElement() {
    this.socket = new WebSocket('ws://localhost:8080');

    this.socket.addEventListener('message', ({ data }) => {
      this.data = JSON.parse(data);
    });
  }

  willDestroy() {
    this.socket.close();
    this.socket = null;
  }
}

class Message {
  constructor(
    public status: number,
    public message: string,
    public data: Array<any>
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  send(res: any) {
    return res.status(this.status).json({
      status: this.status,
      message: this.message,
      data: this.data,
    });
  }
}

export default Message;

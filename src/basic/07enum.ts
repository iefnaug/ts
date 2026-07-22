{
    enum Direction {
        Up,
        Down,
        Left,
        Right,
    }
    let up = Direction.Up;
    console.log(up)

    enum Status {
        Success = 1,
        Failure = 2,
        Pending = 3,
        Unknown = 4,
    }

    const enum Message {
        Success = "SUCCESS",
        Error = "ERROR",
        Warning = "WARNING"
    }

    console.log(Message.Success)
}
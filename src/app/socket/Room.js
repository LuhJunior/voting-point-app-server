class Room {
  constructor(secretaryId, socketId) {
    this.leader = {
      secretaryId,
      socketId,
    };
    this.meeting = {
      currentPoint: -1,
      timer: 30,
      interId: null,
    };
    this.members = new Map();
  }

  addMember(socketId, userId) {
    if (!this.members.has(socketId)) {
      this.members.set(socketId, userId);
    }
  }

  removeMember(socketId) {
    return this.members.delete(socketId);
  }

  countMembers() {
    return this.members.size;
  }

  changePoint(point) {
    this.meeting.currentPoint = point;
  }

  startCount() {
    this.meeting.interId = setInterval(() => {
      if (this.meeting.timer > 0) {
        this.meeting.timer -= 1;
        this.startCount();
      } else {
        clearInterval(this.meeting.interId);
        this.meeting.timer = 30;
      }
    }, 1000);
  }

  countDown() {
    this.meeting.timer = 30;
    this.meeting.interId = setInterval(() => {
      if (this.meeting.timer !== 0) {
        this.meeting.timer -= 1;
      } else {
        clearInterval(this.meeting.interId);
        this.meeting.timer = 30;
      }
    }, 1000);
  }
}

module.exports = Room;

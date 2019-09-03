class Room {
  constructor(secretaryId, socketId) {
    this.leader = {
      secretaryId,
      socketId,
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
}

module.exports = Room;

const { createRoom } = require('../../utils/roomUtils');
const { getAllParticipacaoByReuniaoId } = require('../services/participacaoServices');

let room = null;

async function handleEtapa(socket, id, tipo, reuniaoId) {
  if (room === null) {
    socket.emit('etapa', { etapa: 'criar_sala' });
  } else {
    try {
      const data = await getAllParticipacaoByReuniaoId(reuniaoId);
      if (data.length === 0) {
        if (room.leader.userId !== id) {
          room.addMember(socket.id, id);
          socket.to(room.leader.socketId).emit('quorum_count', { count: room.countMembers() });
        }
        socket.emit('etapa', { etapa: 'quorum' });
      } else {
        socket.emit('etapa', { etapa: 'votation', ponto: room.meeting.currentPoint });
      }
    } catch (e) {
      throw e;
    }
  }
}

async function handleCreateRoom(socket, secretaryId, reuniaoId) {
  try {
    room = await createRoom(secretaryId, socket.id);
    room.leader.socketId = socket.id;
    const data = await getAllParticipacaoByReuniaoId(reuniaoId);
    if (data.length === 0) {
      socket.broadcast.emit('quorum', { count: room.countMembers() });
    } else {
      socket.emit('etapa', { etapa: 'votation', ponto: room.meeting.currentPoint });
      socket.broadcast.emit('etapa', { etapa: 'votation', ponto: room.meeting.currentPoint });
    }
  } catch (e) {
    throw e;
  }
}

function handleCheckRoom(socket) {
  if (room) {
    socket.emit('quorum');
  }
}

function handleJoinRoom(socket, userId) {
  if (room) {
    room.addMember(socket.id, userId);
    socket.to(room.leader.socketId).emit('quorum_count', { count: room.countMembers() });
    socket.emit('quorum');
  }
}

function handleLeaveRoom(socket) {
  if (room) {
    room.removeMember(socket.id);
    socket.to(room.leader.socketId).emit('quorum_count', { count: room.countMembers() });
  }
}

function handleStartMeeting(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    socket.broadcast.emit('start_meeting');
    socket.emit('start_meeting');
  }
}

function handleNextTopic(socket, secretaryId, ponto) {
  if (room && room.leader.secretaryId === secretaryId) {
    socket.broadcast.emit('next_topic', { ponto });
    socket.emit('next_topic', { ponto });
    room.changePoint(ponto);
  }
}

function handleStartVote(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    socket.broadcast.emit('start_vote');
    room.countDown();
  }
}

function handleVotationResult(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    socket.broadcast.emit('votation_result');
    socket.emit('votation_result');
  }
}

function handleEndMeeting(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    room = null;
    socket.broadcast.emit('end_meeting');
    socket.emit('end_meeting');
  }
}

function handleParticipacaoCount(socket) {
  if (room) {
    if (room.leader.socketId === socket.id) socket.emit('quorum_count', { count: room.countMembers() });
  }
}

function handleVotingTime(socket) {
  if (room) {
    socket.emit('voting_time', { tempo: room.meeting.timer });
  }
}
function handleRecoverMeeting(socket) {
  if (room) {
    socket.emit('recover_meeting', { ponto: room.meeting.currentPoint, tempo: room.meeting.timer });
  }
}

module.exports = {
  handleEtapa,
  handleCreateRoom,
  handleCheckRoom,
  handleJoinRoom,
  handleLeaveRoom,
  handleStartMeeting,
  handleNextTopic,
  handleVotingTime,
  handleStartVote,
  handleVotationResult,
  handleEndMeeting,
  handleParticipacaoCount,
  handleRecoverMeeting,
};

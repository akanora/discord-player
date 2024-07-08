export enum WorkerOp {
    OP_PING,
    OP_JOIN_VOICE_CHANNEL,
    OP_VOICE_SERVER_UPDATE,
    OP_VOICE_STATE_UPDATE,
}

export enum WorkerAckOp {
    OP_EVT_DEBUG,
    OP_ACK_PING,
    OP_ACK_JOIN_VOICE_CHANNEL,
    OP_EVT_GATEWAY_DISPATCH,
    OP_EVT_STATS,
}

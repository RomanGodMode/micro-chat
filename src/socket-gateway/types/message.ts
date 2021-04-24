export type Message = {
  text: string
  creationTime: Date
  senderName: string
}

export type SendMessageDto = Message & { id: string }

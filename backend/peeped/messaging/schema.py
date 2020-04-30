import graphene
from graphene_django import DjangoObjectType

from .models import Message

class MessageType(DjangoObjectType):
    class Meta:
        model = Message

class Query(graphene.ObjectType):
    messaging = graphene.List(MessageType)

    def resolve_messaging(self, info):
        return Message.objects.all()

class CreateMessage(graphene.Mutation):
    message = graphene.Field(MessageType)

    class Arguments:
        sender = graphene.String()
        receiver = graphene.String()
        subject = graphene.String()
        message = graphene.String()
        timeSent = graphene.String()

    def mutate(self, info, sender, receiver, subject, message, timeSent):
        message = Message(sender=sender, receiver=receiver, subject=subject, message=message, timeSent=timeSent)
        message.save()
        return CreateMessage(message=message)

class Mutation(graphene.ObjectType):
    create_message = CreateMessage.Field()


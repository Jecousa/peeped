import graphene 
import messaging.schema
import users.schema

class Query(users.schema.Query, messaging.schema.Query, graphene.ObjectType):
    pass

class Mutation(users.schema.Mutation, messaging.schema.Mutation,
graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)

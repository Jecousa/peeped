import graphene 
import messaging.schema

class Query(messaging.schema.Query, graphene.ObjectType):
    pass

class Mutation(messaging.schema.Mutation,
graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)

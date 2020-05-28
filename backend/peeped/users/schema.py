from django.contrib.auth import get_user_model

import graphene
from graphene_django import DjangoObjectType

class userType(DjangoObjectType):
    class Meta:
        model = get_user_model()

class Query(graphene.ObjectType):
    user = graphene.Field(userType, id=graphene.Int (required=True))

    def resolve_user(self, info, id):
        return get_user_model().objects.get(id=id)

class createUser(graphene.Mutation):
    user = graphene.Field(userType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
        

    def mutate(self, info, username, password, email):
        user = get_user_model()(
            username=username,
            email=email,
            password=password
        )
        user.set_password(password)
        user.save()
        return createUser(user=user)

class Mutation(graphene.ObjectType):
    create_user = createUser.Field()
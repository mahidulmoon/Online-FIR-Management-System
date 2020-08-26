from django.shortcuts import render
from .serializers import UserSerializer,GetUserInfo,UserProfileSerializer
from django.contrib.auth.models import User
from .models import UserProfile
from rest_framework import viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['POST'])
def change_pass(request):
    try:
        pk = request.data['id']
        email = request.data['email']
        password = request.data['password']
        user = User.objects.get(id=pk)
        if user is not None:
            if email==user.email:
                user.set_password(password)
                user.save()
                return Response({'message':'password changed'})
            else:
                return Response({'message':'email does not matched'})
        else:
            return Response({'message':'user didnot found'})




        return Response({'message': pk,'email':user.email,'password':password})
    
    except:
        return Response({'message': 'not found'})




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})


class GetUserinfoView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = GetUserInfo




class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer



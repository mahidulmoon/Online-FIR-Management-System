from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import UserProfile
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['username', 'password','email','first_name','last_name','is_staff']
        extra_kwargs = {'password': {'write_only':True, 'required':True}}


    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        user.save()
        Token.objects.create(user=user)
        UserProfile.objects.create(user=user)
        return user


class GetUserInfo(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email','first_name','last_name','is_staff']


class UserProfileSerializer(serializers.ModelSerializer):
    #user = GetUserInfo(many=False)
    class Meta:
        model = UserProfile
        fields = ['user','contact','address','thana','profile_img']
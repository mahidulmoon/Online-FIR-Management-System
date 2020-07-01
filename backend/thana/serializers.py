from rest_framework import serializers
from .models import Thana

class ThanaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Thana
        fields = "__all__"
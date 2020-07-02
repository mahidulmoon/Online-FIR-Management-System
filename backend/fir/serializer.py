from rest_framework import serializers
from .models import Complainerinfo,FIR

class ComplainerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complainerinfo
        fields = "__all__"

class FIRSerializer(serializers.ModelSerializer):
    class Meta:
        model = FIR
        fields = "__all__"

from rest_framework import serializers
from .models import Complainerinfo,FIR,Chargesheetfile

class ComplainerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complainerinfo
        fields = "__all__"

class FIRSerializer(serializers.ModelSerializer):
    class Meta:
        model = FIR
        fields = "__all__"


class ChargeSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chargesheetfile
        fields = "__all__"
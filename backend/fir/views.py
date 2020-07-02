from django.shortcuts import render
from rest_framework import viewsets
from .models import Complainerinfo,FIR
from .serializer import ComplainerInfoSerializer,FIRSerializer
# Create your views here.


class ComplainerViewSet(viewsets.ModelViewSet):
    queryset = Complainerinfo.objects.all()
    serializer_class = ComplainerInfoSerializer


class FirViewSet(viewsets.ModelViewSet):
    queryset = FIR.objects.all()
    serializer_class = FIRSerializer
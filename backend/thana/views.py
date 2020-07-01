from django.shortcuts import render
from rest_framework import viewsets
#from django_filters import DjangoFilterBackend
from .models import Thana
from .serializers import ThanaSerializer
# Create your views here.

class ThanaViewSet(viewsets.ModelViewSet):
    queryset = Thana.objects.all().order_by('thananame')
    serializer_class= ThanaSerializer
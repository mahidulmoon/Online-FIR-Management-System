from django.shortcuts import render
from rest_framework import viewsets
from .models import Complainerinfo,FIR
from .serializer import ComplainerInfoSerializer,FIRSerializer
from rest_framework.decorators import api_view 
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def admin_static(request):
    try:
        totalfir = FIR.objects.all().count()
        pendingfir = FIR.objects.filter(status='pending').count()
        spammedfir = FIR.objects.filter(status='spam marked').count()
        approved = FIR.objects.filter(status='approved').count()
        chargesheet = FIR.objects.filter(status='ChargeSheet Registered').count()

        pendingpercent = (pendingfir*100)/totalfir
        spampercent = (spammedfir*100)/totalfir
        approvepercent = (approved*100)/totalfir
        chargesheetpercent = (chargesheet*100)/totalfir

    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=='GET':
        return Response({ 'totalfir':totalfir,'pending':pendingpercent,'spam':spampercent,'approve':approvepercent,'chargesheet':chargesheetpercent })
        
    


class ComplainerViewSet(viewsets.ModelViewSet):
    queryset = Complainerinfo.objects.all()
    serializer_class = ComplainerInfoSerializer


class FirViewSet(viewsets.ModelViewSet):
    queryset = FIR.objects.all()
    serializer_class = FIRSerializer
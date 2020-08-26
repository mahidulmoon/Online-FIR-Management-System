from django.shortcuts import render
from rest_framework import viewsets
from .models import Complainerinfo,FIR,Chargesheetfile
from .serializer import ComplainerInfoSerializer,FIRSerializer,ChargeSheetSerializer
from rest_framework.decorators import api_view 
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import HttpResponse
# Create your views here.

@api_view(['GET'])
def admin_static(request):
    highauth = 0
    police = 0
    try:
        totalfir = FIR.objects.all().count()
        pendingfir = FIR.objects.filter(status='pending').count()
        spammedfir = FIR.objects.filter(status='spam marked').count()
        approved = FIR.objects.filter(status='approved').count()
        chargesheet = FIR.objects.filter(status='ChargeSheet Registered').count()
        totaluser = User.objects.all().count()
        alluser = User.objects.all()
        chargesheetdoc = Chargesheetfile.objects.all().count()
        
        for user in alluser:
            if user.is_staff:
                highauth += 1
            else:
                police +=1

        pendingpercent = (pendingfir*100)/totalfir
        spampercent = (spammedfir*100)/totalfir
        approvepercent = (approved*100)/totalfir
        chargesheetpercent = (chargesheet*100)/totalfir

    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=='GET':
        return Response({ 'totalfir':totalfir,'pending':pendingpercent,'spam':spampercent,'approve':approvepercent,'chargesheet':chargesheetpercent,'totaluser':totaluser,'highauth':highauth,'police':police,'chargesheetdoc':chargesheetdoc })


@api_view(['POST'])
def search_fir(request):

    if request.method == 'POST':
        searchname=request.data['victimename']
        try:
            result = FIR.objects.get(victimename=searchname)
            serializer = FIRSerializer(result)

            if result is not None:
                return Response(serializer.data)
            else:
                return Response({'message': 'No result found'})



        except:
            return Response({'message':'No result found'})    
    


class ComplainerViewSet(viewsets.ModelViewSet):
    queryset = Complainerinfo.objects.all()
    serializer_class = ComplainerInfoSerializer


class FirViewSet(viewsets.ModelViewSet):
    queryset = FIR.objects.all()
    serializer_class = FIRSerializer


class ChargesheetfileViewSet(viewsets.ModelViewSet):
    queryset = Chargesheetfile.objects.all()
    serializer_class = ChargeSheetSerializer

    def post(self,request,*args,**kwargs):
        aid=request.date['approverid']
        filefield1 = request.data['filefield']

        Chargesheetfile.objects.create(approverid=aid,filefield=filefield1)

        return HttpResponse({'message':'chargesheet created'},status=200)

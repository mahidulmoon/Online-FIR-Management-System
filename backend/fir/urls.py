from django.urls import path,include
from rest_framework import routers
from .views import ComplainerViewSet,FirViewSet,admin_static,ChargesheetfileViewSet

router = routers.DefaultRouter()
router.register('complainerinfo',ComplainerViewSet)
router.register('firregister',FirViewSet)
router.register('chargesheetfile',ChargesheetfileViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('adminstatic/',admin_static),
]



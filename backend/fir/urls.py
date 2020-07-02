from django.urls import path,include
from rest_framework import routers
from .views import ComplainerViewSet,FirViewSet

router = routers.DefaultRouter()
router.register('complainerinfo',ComplainerViewSet)
router.register('firregister',FirViewSet)

urlpatterns = [
    path('',include(router.urls)),
]



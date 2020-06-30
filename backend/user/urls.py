from django.urls import path,include
from rest_framework import routers
from .views import UserViewSet, CustomObtainAuthToken


router = routers.DefaultRouter()
router.register('registration',UserViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('authenticate/', CustomObtainAuthToken.as_view()),
]

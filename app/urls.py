from django.urls import path
from . import views

urlpatterns = [
    path("sample/", views.SampleAPIView.as_view(), name="sample"),
]

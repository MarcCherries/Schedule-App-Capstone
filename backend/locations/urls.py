from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.get_all_locations),
    path('<int:pk>', views.get_location_detail)
]
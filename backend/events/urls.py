from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.get_all_events),
    path('<int:pk>', views.get_event_detail),
    path('user/', views.get_all_events_by_user_id),
    path('pending/<int:pk>', views.request_event_entry),
    path('accept/<int:pk>', views.accept_event_entry)
    ]
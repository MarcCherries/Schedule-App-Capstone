from django.urls import path
from . import views

urlpatterns = [

    path('', views.get_all_comments ),
    path('<int:pk>', views.get_comment_detail )

]
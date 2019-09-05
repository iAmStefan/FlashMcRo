from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('forum/', views.forum, name='forum'),
    path('magazin/', views.shop, name='magazin'),
    path('voteaza/', views.vote, name='vot'),
    path('forum/autentificare-inregistrare/', views.credentials, name="credentials"),
    path('forum/trimitere-email/', views.sendMail, name="sendEmail"),
    path('forum/resetare-parola/', views.passwordReset, name="passwordReset"),
    path('forum/<str:subtopic>', views.requestTopic, name='subTopic'),
    path('404/', views.error404, name='error'),
]
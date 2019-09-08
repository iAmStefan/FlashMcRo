from django.shortcuts import render, redirect
from .forms import RegisterForm, LoginForm, SendEmailForm, PasswordResetForm, subTopicForm
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from .forms import RegisterForm

def index(request):
    return render(request, 'index.html')
def forum(request):
    grade = subTopicForm
    return render(request, 'forum.html', {'grade' : grade})
def requestTopic(request, subtopic):
    grade = subTopicForm
    subtopic = grade
    return render(request, 'requestTopic.html')
def shop(request):
    return render(request, 'shop.html')
def vote(request):
    return render(request, 'vote.html')
def register(request):
    if request.method == 'POST':
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            register_form.save()
            username = register_form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('autentificare')
    else:
        register_form = RegisterForm()
    return render(request, 'signup.html', {'register_form' : register_form})
def sendMail(request):
    send_mail = PasswordResetForm()
    return render(request, 'send-mail.html', {'mailSending' : send_mail})
def passwordReset(request):
    reset = PasswordResetForm()
    return render(request, 'password-reset.html', {'passwordResetting' : reset})
def error404(request):
    return render(request, '404.html')



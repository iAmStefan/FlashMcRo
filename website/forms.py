from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class RegisterForm(UserCreationForm):
    first_name = forms.CharField(required=False, label="Nume",
                                      widget=forms.TextInput(attrs={'class': 'name'}))
    last_name = forms.CharField(required=False, label="Prenume",
                                        widget=forms.TextInput(attrs={'class': 'surname'}))
    username = forms.CharField(required=False, label="Numele din Minecraft",
                                        widget=forms.TextInput(attrs={'class': 'minecraftName'}))
    email = forms.EmailField(required=False, label="Ce faci daca cineva face reclama la canal de Youtube ?",
                                   widget=forms.EmailInput(attrs={'class': 'emailAddress'}))
    password1 = forms.CharField(required=False, label="Parola",
                                   widget=forms.PasswordInput(attrs={'class': 'password'}))
    password2 = forms.CharField(required=False, label="Confirmarea parolei",
                                   widget=forms.PasswordInput(attrs={'class': 'passwordConfirmation'}))

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'password1', 'password2')

    def save(self, commit=True):
        user = super(RegisterForm, self).save(commit=False)
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user

class LoginForm(forms.Form):
    password = forms.CharField(required=False, label="Parola",
                                  widget=forms.PasswordInput(attrs={'class': 'password'}))
    email_address = forms.EmailField(required=False, label="Adresa de e-mail",
                                    widget=forms.EmailInput(attrs={'class': 'emailAddress'}))
    remember_me = forms.BooleanField(required=False, label="Tine-ma minte",
                                     widget=forms.CheckboxInput(attrs={'class': 'rememberMe'}))

class SendEmailForm(forms.Form):
    email_address = forms.EmailField(required=False, label="Adresa de e-mail",
                                    widget=forms.EmailInput(attrs={'class': 'emailAddress'}))

class PasswordResetForm(forms.Form):
    email_address = forms.EmailField(required=False, label="Adresa de e-mail",
                                    widget=forms.EmailInput(attrs={'class': 'emailAddress'}))
    new_password = forms.CharField(required=False, label="Parola cea noua",
                                    widget=forms.PasswordInput(attrs={'class': 'newPassword'}))
    new_password_confirmation = forms.CharField(required=False, label="Confirma noua parola",
                                     widget=forms.PasswordInput(attrs={'class': 'newPasswordConfirmation'}))

class subTopicForm(forms.Form):
    builder = 'Builder'
    admin = 'Administator'
    vip = 'V.I.P'
    scripter = 'Scripter'
    mod = 'Moderator'
    flyer = 'Flyer'

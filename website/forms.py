from django import forms

class RegisterForm(forms.Form):
    name = forms.CharField(required=False, label="Nume",
                                  widget=forms.TextInput(attrs={'class': 'name'}))
    surname = forms.CharField(required=False, label="Prenume",
                                    widget=forms.TextInput(attrs={'class': 'surname'}))
    minecraft_user = forms.CharField(required=False, label="Numele din Minecraft",
                                    widget=forms.TextInput(attrs={'class': 'minecraftName'}))
    email_address = forms.EmailField(required=False, label="Ce faci daca cineva face reclama la canal de Youtube ?",
                               widget=forms.EmailInput(attrs={'class': 'emailAddress'}))
    password = forms.CharField(required=False, label="Parola",
                               widget=forms.PasswordInput(attrs={'class': 'password'}))
    password_confirmation = forms.CharField(required=False, label="Confirmarea parolei",
                               widget=forms.PasswordInput(attrs={'class': 'passwordConfirmation'}))

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
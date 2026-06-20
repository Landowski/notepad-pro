    // ── i18n ──────────────────────────────────────────────────────────────────
    const LOCALES = {
      en: {"loginSenha":"Password","textoEsqueci":"Forgot your password? Enter your email and click","textoEsqueciAqui":"here","botaoLogin":"Log In","semConta":"Don't have an account yet?","linkLogin":"Sign Up","preenchaEmail":"Please fill in the email field","emailValido":"Enter a valid email","emailSenhaInvalidos":"Email or password are invalid","senhasDiferentes":"Passwords do not match","senhaCurta":"Password must be at least 8 characters long","emailRegistrado":"This email is already registered","emailMalFormatado":"This email is badly formatted","erroRegistro":"Registration error: ","repitaSenha":"Repeat password","botaoCadastro":"Register","temConta":"Already have an account?","linkSignUp":"Log In","toast_reset_password":"A password reset email has been sent to ","toast_error_reset_password":"Error sending password reset email."},
      pt_BR: {"loginSenha":"Senha","textoEsqueci":"Esqueceu a senha? Preencha o e-mail e clique","textoEsqueciAqui":"aqui","botaoLogin":"Entrar","semConta":"Ainda não tem uma conta?","linkLogin":"Cadastre-se","preenchaEmail":"Preencha o campo e-mail","emailValido":"Insira um e-mail válido","emailSenhaInvalidos":"E-mail ou senha são inválidos","senhasDiferentes":"As senhas não são iguais","senhaCurta":"A senha deve ter pelo menos 8 caracteres","emailRegistrado":"Este e-mail já está registrado","emailMalFormatado":"Este e-mail está mal formatado","erroRegistro":"Erro no cadastro: ","repitaSenha":"Repetir senha","botaoCadastro":"Cadastrar","temConta":"Já tem uma conta?","linkSignUp":"Entrar","toast_reset_password":"Um e-mail de redefinição de senha foi enviado para ","toast_error_reset_password":"Erro ao enviar e-mail de redefinição."},
      de: {"loginSenha":"Passwort","textoEsqueci":"Passwort vergessen? Geben Sie Ihre E-Mail ein und klicken Sie","textoEsqueciAqui":"hier","botaoLogin":"Einloggen","semConta":"Sie haben noch kein Konto?","linkLogin":"Registrieren","preenchaEmail":"Bitte füllen Sie das E-Mail-Feld aus","emailValido":"Geben Sie eine gültige E-Mail-Adresse ein","emailSenhaInvalidos":"E-Mail oder Passwort sind ungültig","senhasDiferentes":"Passwörter stimmen nicht überein","senhaCurta":"Das Passwort muss mindestens 8 Zeichen lang sein","emailRegistrado":"Diese E-Mail ist bereits registriert","emailMalFormatado":"Diese E-Mail ist falsch formatiert","erroRegistro":"Registrierungsfehler: ","repitaSenha":"Passwort wiederholen","botaoCadastro":"Registrieren","temConta":"Haben Sie bereits ein Konto?","linkSignUp":"Einloggen","toast_reset_password":"Eine E-Mail zum Zurücksetzen des Passworts wurde gesendet an ","toast_error_reset_password":"Fehler beim Senden der E-Mail."},
      es: {"loginSenha":"Contraseña","textoEsqueci":"¿Olvidaste tu contraseña? Ingresa tu correo y haz clic","textoEsqueciAqui":"aquí","botaoLogin":"Iniciar sesión","semConta":"¿Aún no tienes una cuenta?","linkLogin":"Regístrate","preenchaEmail":"Por favor, completa el campo de correo electrónico","emailValido":"Ingresa un correo electrónico válido","emailSenhaInvalidos":"Correo electrónico o contraseña inválidos","senhasDiferentes":"Las contraseñas no coinciden","senhaCurta":"La contraseña debe tener al menos 8 caracteres","emailRegistrado":"Este correo electrónico ya está registrado","emailMalFormatado":"Este correo electrónico está mal formateado","erroRegistro":"Error de registro: ","repitaSenha":"Repite la contraseña","botaoCadastro":"Registrar","temConta":"¿Ya tienes una cuenta?","linkSignUp":"Iniciar sesión","toast_reset_password":"Se ha enviado un correo para restablecer la contraseña a ","toast_error_reset_password":"Error al enviar el correo."},
      fr: {"loginSenha":"Mot de passe","textoEsqueci":"Mot de passe oublié ? Entrez votre e-mail et cliquez","textoEsqueciAqui":"ici","botaoLogin":"Se connecter","semConta":"Vous n'avez pas encore de compte ?","linkLogin":"S'inscrire","preenchaEmail":"Veuillez remplir le champ e-mail","emailValido":"Entrez une adresse e-mail valide","emailSenhaInvalidos":"E-mail ou mot de passe invalide","senhasDiferentes":"Les mots de passe ne correspondent pas","senhaCurta":"Le mot de passe doit contenir au moins 8 caractères","emailRegistrado":"Cet e-mail est déjà enregistré","emailMalFormatado":"Cet e-mail est mal formaté","erroRegistro":"Erreur d'inscription : ","repitaSenha":"Répéter le mot de passe","botaoCadastro":"S'inscrire","temConta":"Vous avez déjà un compte ?","linkSignUp":"Se connecter","toast_reset_password":"Un e-mail de réinitialisation du mot de passe a été envoyé à ","toast_error_reset_password":"Erreur lors de l'envoi de l'e-mail."},
      it: {"loginSenha":"Password","textoEsqueci":"Hai dimenticato la password? Inserisci la tua email e clicca","textoEsqueciAqui":"qui","botaoLogin":"Accedi","semConta":"Non hai ancora un account?","linkLogin":"Registrati","preenchaEmail":"Per favore, compila il campo email","emailValido":"Inserisci un'email valida","emailSenhaInvalidos":"Email o password non validi","senhasDiferentes":"Le password non corrispondono","senhaCurta":"La password deve contenere almeno 8 caratteri","emailRegistrado":"Questa email è già registrata","emailMalFormatado":"Questa email è mal formattata","erroRegistro":"Errore di registrazione: ","repitaSenha":"Ripeti la password","botaoCadastro":"Registrati","temConta":"Hai già un account?","linkSignUp":"Accedi","toast_reset_password":"Una email per reimpostare la password è stata inviata a ","toast_error_reset_password":"Errore durante l'invio dell'email."},
      ja: {"loginSenha":"パスワード","textoEsqueci":"パスワードをお忘れですか？メールアドレスを入力してクリックしてください","textoEsqueciAqui":"こちら","botaoLogin":"ログイン","semConta":"まだアカウントをお持ちでないですか？","linkLogin":"サインアップ","preenchaEmail":"メールフィールドを入力してください","emailValido":"有効なメールアドレスを入力してください","emailSenhaInvalidos":"メールアドレスまたはパスワードが無効です","senhasDiferentes":"パスワードが一致しません","senhaCurta":"パスワードは8文字以上で入力してください","emailRegistrado":"このメールアドレスはすでに登録されています","emailMalFormatado":"このメールアドレスの形式は正しくありません","erroRegistro":"登録エラー: ","repitaSenha":"パスワードを再入力","botaoCadastro":"登録","temConta":"すでにアカウントをお持ちですか？","linkSignUp":"ログイン","toast_reset_password":"パスワードリセットメールを送信しました: ","toast_error_reset_password":"メール送信中にエラーが発生しました。"},
      ko: {"loginSenha":"비밀번호","textoEsqueci":"비밀번호를 잊으셨나요? 이메일을 입력하고 클릭하세요","textoEsqueciAqui":"여기","botaoLogin":"로그인","semConta":"아직 계정이 없으신가요?","linkLogin":"가입하기","preenchaEmail":"이메일 필드를 입력해주세요","emailValido":"유효한 이메일을 입력하세요","emailSenhaInvalidos":"이메일 또는 비밀번호가 잘못되었습니다","senhasDiferentes":"비밀번호가 일치하지 않습니다","senhaCurta":"비밀번호는 최소 8자 이상이어야 합니다","emailRegistrado":"이 이메일은 이미 등록되어 있습니다","emailMalFormatado":"이 이메일 형식이 올바르지 않습니다","erroRegistro":"등록 오류: ","repitaSenha":"비밀번호 확인","botaoCadastro":"가입","temConta":"이미 계정이 있으신가요?","linkSignUp":"로그인","toast_reset_password":"비밀번호 재설정 이메일을 보냈습니다: ","toast_error_reset_password":"이메일 전송 중 오류가 발생했습니다."},
      ru: {"loginSenha":"Пароль","textoEsqueci":"Забыли пароль? Введите вашу почту и нажмите","textoEsqueciAqui":"здесь","botaoLogin":"Войти","semConta":"Ещё нет аккаунта?","linkLogin":"Зарегистрироваться","preenchaEmail":"Пожалуйста, заполните поле почты","emailValido":"Введите корректный email","emailSenhaInvalidos":"Неверный email или пароль","senhasDiferentes":"Пароли не совпадают","senhaCurta":"Пароль должен быть не менее 8 символов","emailRegistrado":"Этот email уже зарегистрирован","emailMalFormatado":"Неправильный формат email","erroRegistro":"Ошибка регистрации: ","repitaSenha":"Повторите пароль","botaoCadastro":"Регистрация","temConta":"Уже есть аккаунт?","linkSignUp":"Войти","toast_reset_password":"Письмо для сброса пароля отправлено на ","toast_error_reset_password":"Ошибка при отправке письма."},
      zh_CN: {"loginSenha":"密码","textoEsqueci":"忘记密码？请输入您的邮箱并点击","textoEsqueciAqui":"这里","botaoLogin":"登录","semConta":"还没有账号？","linkLogin":"注册","preenchaEmail":"请填写邮箱","emailValido":"请输入有效的邮箱","emailSenhaInvalidos":"邮箱或密码错误","senhasDiferentes":"两次输入的密码不一致","senhaCurta":"密码长度至少8个字符","emailRegistrado":"该邮箱已被注册","emailMalFormatado":"邮箱格式错误","erroRegistro":"注册错误: ","repitaSenha":"请重复输入密码","botaoCadastro":"注册","temConta":"已有账号？","linkSignUp":"登录","toast_reset_password":"重置密码邮件已发送到 ","toast_error_reset_password":"发送邮件时出错。"}
    };
    const LANG_NAMES = { en: 'English', pt_BR: 'Português (BR)', de: 'Deutsch', es: 'Español', fr: 'Français', it: 'Italiano', ja: '日本語', ko: '한국어', ru: 'Русский', zh_CN: '中文' };

    function detectLang() {
      const saved = localStorage.getItem('np_lang');
      if (saved && LOCALES[saved]) return saved;
      const nav = navigator.language || 'en';
      if (nav.startsWith('pt')) return 'pt_BR';
      if (nav.startsWith('zh')) return 'zh_CN';
      const short = nav.split('-')[0];
      return LOCALES[short] ? short : 'en';
    }

    let currentLang = detectLang();
    function t(key) { return (LOCALES[currentLang] || LOCALES['en'])[key] || key; }

    function applyLang() {
      document.getElementById('login-password').placeholder = t('loginSenha');
      document.getElementById('textoEsqueci').textContent = t('textoEsqueci');
      document.getElementById('linkEsqueci').textContent = t('textoEsqueciAqui');
      document.getElementById('botaoLogin').textContent = t('botaoLogin');
      document.getElementById('semConta').textContent = t('semConta');
      document.getElementById('linkLogin').textContent = t('linkLogin');
      document.getElementById('signup-password').placeholder = t('loginSenha');
      document.getElementById('signup-password-verify').placeholder = t('repitaSenha');
      document.getElementById('botaoCadastro').textContent = t('botaoCadastro');
      document.getElementById('temConta').textContent = t('temConta');
      document.getElementById('linkSignUp').textContent = t('linkSignUp');
    }

    // Build lang selector
    const sel = document.getElementById('langSelect');
    Object.entries(LANG_NAMES).forEach(([code, name]) => {
      const opt = document.createElement('option');
      opt.value = code; opt.textContent = name;
      if (code === currentLang) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', () => {
      currentLang = sel.value;
      localStorage.setItem('np_lang', currentLang);
      applyLang();
    });
    applyLang();

    // ── Firebase Auth ─────────────────────────────────────────────────────────
    let isCreatingAccount = false;

    firebase.auth().onAuthStateChanged((user) => {
      if (user && !isCreatingAccount) {
        setTimeout(() => { window.location.href = '/'; }, 100);
      }
    });

    const popLogin = document.getElementById('popLogin');
    const popSignUp = document.getElementById('popSignUp');
    const loginLink = document.querySelector('#linkLogin');
    const signupLink = document.querySelector('#linkSignUp');

    function toast(texto) {
      let old = document.getElementById('noti');
      if (old) old.parentElement.remove();
      let divToast = document.createElement('div');
      divToast.innerHTML = `<div id="noti">${texto}</div>`;
      document.body.appendChild(divToast);
      var notifica = document.getElementById('noti');
      notifica.className = 'show';
      setTimeout(() => { if (divToast.parentElement) document.body.removeChild(divToast); }, 3500);
    }

    loginLink.addEventListener('click', function() {
      document.getElementById('login-form-sign-up').reset();
      resetToggles();
      popLogin.classList.remove('fadeInRight','fadeOutLeft');
      popSignUp.classList.remove('fadeInRight','fadeOutLeft');
      popLogin.classList.add('fadeOutLeft');
      popLogin.addEventListener('animationend', function h() {
        popLogin.style.display = 'none'; popLogin.classList.remove('fadeOutLeft');
        popSignUp.style.display = 'flex'; popSignUp.classList.add('fadeInRight');
        popLogin.removeEventListener('animationend', h);
      });
    });

    signupLink.addEventListener('click', function() {
      document.getElementById('login-form').reset();
      resetToggles();
      popLogin.classList.remove('fadeInRight','fadeOutLeft');
      popSignUp.classList.remove('fadeInRight','fadeOutLeft');
      popSignUp.classList.add('fadeOutLeft');
      popSignUp.addEventListener('animationend', function h() {
        popSignUp.style.display = 'none'; popSignUp.classList.remove('fadeOutLeft');
        popLogin.style.display = 'flex'; popLogin.classList.add('fadeInRight');
        popSignUp.removeEventListener('animationend', h);
      });
    });

    function resetToggles() {
      ['login-password','signup-password','signup-password-verify'].forEach(id => { const el = document.getElementById(id); if(el) el.type='password'; });
      document.getElementById('btnToggle').innerHTML = '<i class="fa-regular fa-eye fa-lg"></i>';
      document.getElementById('btnToggleSign').innerHTML = '<i class="fa-regular fa-eye fa-lg"></i>';
    }

    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          const btn = document.getElementById('botaoLogin');
          btn.disabled = true;
          btn.innerHTML = '<img src="img/loading.svg" width="18" height="18"/>';
          btn.style.cursor = 'auto';
          setTimeout(() => { window.location.href = '/'; }, 1500);
        })
        .catch((error) => {
          isCreatingAccount = false;
          toast(t('emailSenhaInvalidos'));
        });
    });

    document.getElementById('login-form-sign-up').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirm = document.getElementById('signup-password-verify').value;
      if (password !== confirm) { toast(t('senhasDiferentes')); return; }
      if (password.length < 8) { toast(t('senhaCurta')); return; }
      isCreatingAccount = true;
      const db = firebase.firestore();
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          const btn = document.getElementById('botaoCadastro');
          btn.innerHTML = '<img src="img/loading.svg" width="18" height="18"/>'; btn.disabled = true; btn.style.cursor = 'auto';
          return db.collection('users').doc(cred.user.uid).set({ email, admin: false, dark_mode: false, subscriber: false }).then(() => cred.user);
        })
        .then((user) => {
          return firebase.firestore().collection('users').doc(user.uid).collection('categories').add({ name: 'Main', protected: true }).then(() => user);
        })
        .then(() => { setTimeout(() => { window.location.href = '/'; }, 1500); })
        .catch((error) => {
          isCreatingAccount = false;
          if (error.code === 'auth/email-already-in-use') toast(t('emailRegistrado'));
          else if (error.code === 'auth/invalid-email') { toast(t('emailMalFormatado')); document.getElementById('signup-email').style.backgroundColor = '#ffb5b5'; }
          else toast(t('erroRegistro') + error.message);
        });
    });

    document.getElementById('linkEsqueci').addEventListener('click', () => {
      const email = document.getElementById('login-email').value.trim();
      if (!email) { toast(t('preenchaEmail')); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { toast(t('emailValido')); return; }
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => toast(t('toast_reset_password') + email))
        .catch(() => toast(t('toast_error_reset_password')));
    });

    // Password toggles
    document.getElementById('btnToggle').addEventListener('click', () => {
      const p = document.getElementById('login-password');
      const btn = document.getElementById('btnToggle');
      if (p.type === 'password') { p.type = 'text'; btn.innerHTML = '<i class="fa-regular fa-eye-slash fa-lg"></i>'; }
      else { p.type = 'password'; btn.innerHTML = '<i class="fa-regular fa-eye fa-lg"></i>'; }
    });

    document.getElementById('btnToggleSign').addEventListener('click', () => {
      const p1 = document.getElementById('signup-password');
      const p2 = document.getElementById('signup-password-verify');
      const btn = document.getElementById('btnToggleSign');
      if (p1.type === 'password') { p1.type = 'text'; p2.type = 'text'; btn.innerHTML = '<i class="fa-regular fa-eye-slash fa-lg"></i>'; }
      else { p1.type = 'password'; p2.type = 'password'; btn.innerHTML = '<i class="fa-regular fa-eye fa-lg"></i>'; }
    });
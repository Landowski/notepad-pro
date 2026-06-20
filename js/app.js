    // ── i18n ──────────────────────────────────────────────────────────────────
    const LOCALES = {
      en: {"title":"Hello, ","title_new_note":"New Note","change_email_title":"Change Email","change_email_text":"Enter the new email and access the link sent there.","change_email_input":"New email","change_email_button":"Send link","change_password_title":"Change Password","change_password_text":"The access request will be sent to your email.","change_password_button":"Send request","manage_subscription_title":"Manage Subscription","manage_subscription_text":"The Stripe subscription portal will open in a new screen.","manage_subscription_button":"Open customer portal","logout_title":"Log Out","logout_text":"You are automatically logged into Notepad PRO as ","logout_text_2":" You can only use the extension when logged in.","logout_button":"LOG OUT","note_title_placeholder":"Title","note_text_placeholder":"Your text here...","note_categories_text":"Categories","note_read_text":"Read","note_pdf_text":"PDF File","note_pdf_image_text":"PDF Image","note_txt_text":"TXT File","note_delete_text":"Delete","category_header":"Category","category_name_input":"Category name","category_add_button":"Add","category_new_category":"New Category","category_edit_category":"Edit Category: ","category_insert_button":"Insert","category_edit_button":"Edit","category_delete_button":"Delete","category_cancel_button":"Cancel","stripe_text":"Subscribe to Notepad PRO and get:<br/><br/>● Unlimited notes and categories<br/>● Export notes to TXT and PDF<br/>● Create to-do lists<br/><br/>CHOOSE YOUR PLAN:<br/><br/>● Monthly plan for R&#36; 4.99<br/>● Annual plan for R&#36; 49.99 (save two months)","stripe_monthly":"MONTHLY","stripe_yearly":"ANNUAL","toast_change_email":"Verification email sent to: ","toast_error_change_email":"Log out and log in again to change your email.","toast_reset_password":"A password reset email has been sent to ","toast_note_inserted":"Note inserted","toast_note_updated":"Note updated","toast_note_deleted":"Note deleted","toast_category_added":"Category added","toast_category_updated":"Category updated","toast_note_category_updated":"Note category updated","toast_category_deleted":"Category and notes deleted","alert_delete_note":"Are you sure you want to delete this note?","alert_delete_category":"Are you sure you want to delete this category and all its notes?","alert_text_link":"Select a text first","settings_title":"Account","note_stats":"NOTES","categorie_stats":"CATEGORIES","drag":"Hold, drag, and drop sidebar items to reorder them as desired in the list."},
      pt_BR: {"title":"Olá, ","title_new_note":"Nova Nota","change_email_title":"Alterar E-mail","change_email_text":"Digite o novo e-mail e acesse o link enviado para lá.","change_email_input":"Novo e-mail","change_email_button":"Enviar link","change_password_title":"Alterar Senha","change_password_text":"A solicitação de acesso será enviada para seu e-mail.","change_password_button":"Enviar solicitação","manage_subscription_title":"Gerenciar Assinatura","manage_subscription_text":"O portal de assinatura do Stripe será aberto em uma nova tela.","manage_subscription_button":"Abrir portal do cliente","logout_title":"Sair da Conta","logout_text":"Você está automaticamente logado no Notepad PRO como ","logout_text_2":" Você só pode usar a extensão quando estiver logado.","logout_button":"SAIR","note_title_placeholder":"Título","note_text_placeholder":"Seu texto aqui...","note_categories_text":"Categorias","note_read_text":"Leitura","note_pdf_text":"Arquivo PDF","note_pdf_image_text":"Imagem PDF","note_txt_text":"Arquivo TXT","note_delete_text":"Excluir","category_header":"Categoria","category_name_input":"Nome da categoria","category_add_button":"Adicionar","category_new_category":"Nova Categoria","category_edit_category":"Editar Categoria: ","category_insert_button":"Inserir","category_edit_button":"Editar","category_delete_button":"Excluir","category_cancel_button":"Cancelar","stripe_text":"Assine o Notepad PRO e tenha:<br/><br/>● Notas e categorias ilimitadas<br/>● Exportação de notas para TXT e PDF<br/>● Criação de listas de tarefas<br/><br/>ESCOLHA SEU PLANO:<br/><br/>● Plano mensal por R&#36; 4,99<br/>● Plano anual por R&#36; 49,99 (economize dois meses)","stripe_monthly":"MENSAL","stripe_yearly":"ANUAL","toast_change_email":"E-mail de verificação enviado para: ","toast_error_change_email":"Faça logout e um login novo para alterar o e-mail.","toast_reset_password":"Um e-mail de redefinição de senha foi enviado para ","toast_note_inserted":"Nota inserida","toast_note_updated":"Nota atualizada","toast_note_deleted":"Nota excluída","toast_category_added":"Categoria adicionada","toast_category_updated":"Categoria atualizada","toast_note_category_updated":"Categoria da nota atualizada","toast_category_deleted":"Categoria e notas excluídas","alert_delete_note":"Tem certeza de que deseja excluir esta nota?","alert_delete_category":"Tem certeza de que deseja excluir esta categoria e todas as suas notas?","alert_text_link":"Selecione um texto primeiro","settings_title":"Conta","note_stats":"NOTAS","categorie_stats":"CATEGORIAS","drag":"Segure, arraste e solte os itens da barra lateral para reordená-los conforme desejado na lista."},
      de: {"title":"Hallo, ","title_new_note":"Neue Notiz","change_email_title":"E-Mail ändern","change_email_text":"Geben Sie die neue E-Mail-Adresse ein und greifen Sie auf den dorthin gesendeten Link zu.","change_email_input":"Neue E-Mail","change_email_button":"Link senden","change_password_title":"Passwort ändern","change_password_text":"Die Zugriffsanfrage wird an Ihre E-Mail gesendet.","change_password_button":"Anfrage senden","manage_subscription_title":"Abonnement verwalten","manage_subscription_text":"Das Stripe-Abonnement-Portal wird in einem neuen Fenster geöffnet.","manage_subscription_button":"Kundenportal öffnen","logout_title":"Abmelden","logout_text":"Sie sind automatisch bei Notepad PRO angemeldet als ","logout_text_2":" Sie können die Erweiterung nur verwenden, wenn Sie angemeldet sind.","logout_button":"ABMELDEN","note_title_placeholder":"Titel","note_text_placeholder":"Ihr Text hier...","note_categories_text":"Kategorien","note_read_text":"Lesen","note_pdf_text":"PDF-Datei","note_pdf_image_text":"PDF-Bild","note_txt_text":"TXT-Datei","note_delete_text":"Löschen","category_header":"Kategorie","category_name_input":"Kategoriename","category_add_button":"Hinzufügen","category_new_category":"Neue Kategorie","category_edit_category":"Kategorie bearbeiten: ","category_insert_button":"Einfügen","category_edit_button":"Bearbeiten","category_delete_button":"Löschen","category_cancel_button":"Abbrechen","stripe_text":"Abonnieren Sie Notepad PRO und erhalten Sie:<br/><br/>● Unbegrenzte Notizen und Kategorien<br/>● Notizen als TXT und PDF exportieren<br/>● To-Do-Listen erstellen<br/><br/>WÄHLEN SIE IHREN PLAN:<br/><br/>● Monatsplan für R&#36; 4,99<br/>● Jahresplan für R&#36; 49,99 (zwei Monate sparen)","stripe_monthly":"MONATLICH","stripe_yearly":"JÄHRLICH","toast_change_email":"Bestätigungs-E-Mail gesendet an: ","toast_error_change_email":"Melden Sie sich ab und wieder an, um Ihre E-Mail zu ändern.","toast_reset_password":"Eine E-Mail zum Zurücksetzen des Passworts wurde gesendet an ","toast_note_inserted":"Notiz hinzugefügt","toast_note_updated":"Notiz aktualisiert","toast_note_deleted":"Notiz gelöscht","toast_category_added":"Kategorie hinzugefügt","toast_category_updated":"Kategorie aktualisiert","toast_note_category_updated":"Notizkategorie aktualisiert","toast_category_deleted":"Kategorie und Notizen gelöscht","alert_delete_note":"Sind Sie sicher, dass Sie diese Notiz löschen möchten?","alert_delete_category":"Sind Sie sicher, dass Sie diese Kategorie und alle ihre Notizen löschen möchten?","alert_text_link":"Wählen Sie zuerst einen Text aus","settings_title":"Konto","note_stats":"NOTIZEN","categorie_stats":"KATEGORIEN","drag":"Halten, ziehen und ablegen, um die Elemente in der Seitenleiste in gewünschter Reihenfolge anzuordnen."},
      es: {"title":"Hola, ","title_new_note":"Nueva nota","change_email_title":"Cambiar correo","change_email_text":"Ingresa el nuevo correo y accede al enlace enviado allí.","change_email_input":"Nuevo correo","change_email_button":"Enviar enlace","change_password_title":"Cambiar contraseña","change_password_text":"La solicitud de acceso será enviada a tu correo.","change_password_button":"Enviar solicitud","manage_subscription_title":"Gestionar suscripción","manage_subscription_text":"El portal de suscripción de Stripe se abrirá en una nueva ventana.","manage_subscription_button":"Abrir portal del cliente","logout_title":"Cerrar sesión","logout_text":"Has iniciado sesión automáticamente en Notepad PRO como ","logout_text_2":" Solo puedes usar la extensión si estás conectado.","logout_button":"CERRAR SESIÓN","note_title_placeholder":"Título","note_text_placeholder":"Tu texto aquí...","note_categories_text":"Categorías","note_read_text":"Leer","note_pdf_text":"Archivo PDF","note_pdf_image_text":"Imagen PDF","note_txt_text":"Archivo TXT","note_delete_text":"Eliminar","category_header":"Categoría","category_name_input":"Nombre de la categoría","category_add_button":"Agregar","category_new_category":"Nueva categoría","category_edit_category":"Editar categoría: ","category_insert_button":"Insertar","category_edit_button":"Editar","category_delete_button":"Eliminar","category_cancel_button":"Cancelar","stripe_text":"Suscríbete a Notepad PRO y obtén:<br/><br/>● Notas y categorías ilimitadas<br/>● Exportar notas a TXT y PDF<br/>● Crear listas de tareas<br/><br/>ELIGE TU PLAN:<br/><br/>● Plan mensual por R&#36; 4.99<br/>● Plan anual por R&#36; 49.99 (ahorra dos meses)","stripe_monthly":"MENSUAL","stripe_yearly":"ANUAL","toast_change_email":"Correo de verificación enviado a: ","toast_error_change_email":"Cierra sesión e inicia nuevamente para cambiar tu correo.","toast_reset_password":"Se ha enviado un correo para restablecer la contraseña a ","toast_note_inserted":"Nota añadida","toast_note_updated":"Nota actualizada","toast_note_deleted":"Nota eliminada","toast_category_added":"Categoría añadida","toast_category_updated":"Categoría actualizada","toast_note_category_updated":"Categoría de la nota actualizada","toast_category_deleted":"Categoría y notas eliminadas","alert_delete_note":"¿Estás seguro de que quieres eliminar esta nota?","alert_delete_category":"¿Estás seguro de que quieres eliminar esta categoría y todas sus notas?","alert_text_link":"Selecciona primero un texto","settings_title":"Cuenta","note_stats":"NOTAS","categorie_stats":"CATEGORÍAS","drag":"Mantén presionado, arrastra y suelta los elementos de la barra lateral para ordenarlos como desees en la lista."},
      fr: {"title":"Bonjour, ","title_new_note":"Nouvelle note","change_email_title":"Changer l'e-mail","change_email_text":"Entrez le nouvel e-mail et accédez au lien qui y a été envoyé.","change_email_input":"Nouvel e-mail","change_email_button":"Envoyer le lien","change_password_title":"Changer le mot de passe","change_password_text":"La demande d'accès sera envoyée à votre e-mail.","change_password_button":"Envoyer la demande","manage_subscription_title":"Gérer l'abonnement","manage_subscription_text":"Le portail d'abonnement Stripe s'ouvrira dans une nouvelle fenêtre.","manage_subscription_button":"Ouvrir le portail client","logout_title":"Déconnexion","logout_text":"Vous êtes automatiquement connecté à Notepad PRO en tant que ","logout_text_2":" Vous ne pouvez utiliser l'extension que si vous êtes connecté.","logout_button":"SE DÉCONNECTER","note_title_placeholder":"Titre","note_text_placeholder":"Votre texte ici...","note_categories_text":"Catégories","note_read_text":"Lire","note_pdf_text":"Fichier PDF","note_pdf_image_text":"Image PDF","note_txt_text":"Fichier TXT","note_delete_text":"Supprimer","category_header":"Catégorie","category_name_input":"Nom de la catégorie","category_add_button":"Ajouter","category_new_category":"Nouvelle catégorie","category_edit_category":"Modifier la catégorie : ","category_insert_button":"Insérer","category_edit_button":"Modifier","category_delete_button":"Supprimer","category_cancel_button":"Annuler","stripe_text":"Abonnez-vous à Notepad PRO et obtenez :<br/><br/>● Notes et catégories illimitées<br/>● Exporter des notes en TXT et PDF<br/>● Créer des listes de tâches<br/><br/>CHOISISSEZ VOTRE FORFAIT :<br/><br/>● Forfait mensuel à R&#36; 4,99<br/>● Forfait annuel à R&#36; 49,99 (deux mois offerts)","stripe_monthly":"MENSUEL","stripe_yearly":"ANNUEL","toast_change_email":"E-mail de vérification envoyé à : ","toast_error_change_email":"Déconnectez-vous et reconnectez-vous pour changer votre e-mail.","toast_reset_password":"Un e-mail de réinitialisation du mot de passe a été envoyé à ","toast_note_inserted":"Note ajoutée","toast_note_updated":"Note mise à jour","toast_note_deleted":"Note supprimée","toast_category_added":"Catégorie ajoutée","toast_category_updated":"Catégorie mise à jour","toast_note_category_updated":"Catégorie de la note mise à jour","toast_category_deleted":"Catégorie et notes supprimées","alert_delete_note":"Êtes-vous sûr de vouloir supprimer cette note ?","alert_delete_category":"Êtes-vous sûr de vouloir supprimer cette catégorie et toutes ses notes ?","alert_text_link":"Sélectionnez d'abord un texte","settings_title":"Compte","note_stats":"NOTES","categorie_stats":"CATÉGORIES","drag":"Maintenez, faites glisser et déposez les éléments de la barre latérale pour les réorganiser comme vous le souhaitez."},
      it: {"title":"Ciao, ","title_new_note":"Nuova nota","change_email_title":"Cambia email","change_email_text":"Inserisci la nuova email e accedi al link inviato.","change_email_input":"Nuova email","change_email_button":"Invia link","change_password_title":"Cambia password","change_password_text":"La richiesta di accesso verrà inviata alla tua email.","change_password_button":"Invia richiesta","manage_subscription_title":"Gestisci abbonamento","manage_subscription_text":"Il portale di abbonamento Stripe si aprirà in una nuova finestra.","manage_subscription_button":"Apri portale cliente","logout_title":"Disconnetti","logout_text":"Sei automaticamente connesso a Notepad PRO come ","logout_text_2":" Puoi usare l'estensione solo quando sei connesso.","logout_button":"DISCONNETTI","note_title_placeholder":"Titolo","note_text_placeholder":"Il tuo testo qui...","note_categories_text":"Categorie","note_read_text":"Leggi","note_pdf_text":"File PDF","note_pdf_image_text":"Immagine PDF","note_txt_text":"File TXT","note_delete_text":"Elimina","category_header":"Categoria","category_name_input":"Nome categoria","category_add_button":"Aggiungi","category_new_category":"Nuova categoria","category_edit_category":"Modifica categoria: ","category_insert_button":"Inserisci","category_edit_button":"Modifica","category_delete_button":"Elimina","category_cancel_button":"Annulla","stripe_text":"Abbonati a Notepad PRO e ottieni:<br/><br/>● Note e categorie illimitate<br/>● Esporta note in TXT e PDF<br/>● Crea liste di cose da fare<br/><br/>SCEGLI IL TUO PIANO:<br/><br/>● Piano mensile a R&#36; 4,99<br/>● Piano annuale a R&#36; 49,99 (risparmia due mesi)","stripe_monthly":"MENSILE","stripe_yearly":"ANNUALE","toast_change_email":"Email di verifica inviata a: ","toast_error_change_email":"Disconnettiti e riconnettiti per cambiare la tua email.","toast_reset_password":"Una email per reimpostare la password è stata inviata a ","toast_note_inserted":"Nota aggiunta","toast_note_updated":"Nota aggiornata","toast_note_deleted":"Nota eliminata","toast_category_added":"Categoria aggiunta","toast_category_updated":"Categoria aggiornata","toast_note_category_updated":"Categoria della nota aggiornata","toast_category_deleted":"Categoria e note eliminate","alert_delete_note":"Sei sicuro di voler eliminare questa nota?","alert_delete_category":"Sei sicuro di voler eliminare questa categoria e tutte le sue note?","alert_text_link":"Seleziona prima un testo","settings_title":"Account","note_stats":"NOTE","categorie_stats":"CATEGORIE","drag":"Tieni premuto, trascina e rilascia gli elementi della barra laterale per riordinarli come desideri."},
      ja: {"title":"こんにちは、","title_new_note":"新しいメモ","change_email_title":"メールアドレス変更","change_email_text":"新しいメールアドレスを入力し、送信されたリンクにアクセスしてください。","change_email_input":"新しいメールアドレス","change_email_button":"リンクを送信","change_password_title":"パスワード変更","change_password_text":"アクセスリクエストがメールに送信されます。","change_password_button":"リクエストを送信","manage_subscription_title":"サブスクリプション管理","manage_subscription_text":"Stripeのサブスクリプションポータルが新しい画面で開きます。","manage_subscription_button":"カスタマーポータルを開く","logout_title":"ログアウト","logout_text":"あなたは自動的に Notepad PRO に ","logout_text_2":" としてログインしています。拡張機能はログイン時のみ使用可能です。","logout_button":"ログアウト","note_title_placeholder":"タイトル","note_text_placeholder":"ここにテキストを入力...","note_categories_text":"カテゴリー","note_read_text":"読む","note_pdf_text":"PDFファイル","note_pdf_image_text":"PDF画像","note_txt_text":"TXTファイル","note_delete_text":"削除","category_header":"カテゴリー","category_name_input":"カテゴリー名","category_add_button":"追加","category_new_category":"新しいカテゴリー","category_edit_category":"カテゴリー編集: ","category_insert_button":"挿入","category_edit_button":"編集","category_delete_button":"削除","category_cancel_button":"キャンセル","stripe_text":"Notepad PRO を購読すると次の機能が利用できます:<br/><br/>● 無制限のメモとカテゴリー<br/>● ノートを TXT および PDF にエクスポート<br/>● ToDo リストを作成<br/><br/>プランを選択:<br/><br/>● 月額プラン R&#36; 4.99<br/>● 年額プラン R&#36; 49.99（2か月分お得）","stripe_monthly":"月額","stripe_yearly":"年額","toast_change_email":"確認メールを送信しました: ","toast_error_change_email":"メールを変更するには、ログアウトして再度ログインしてください。","toast_reset_password":"パスワードリセットメールを送信しました: ","toast_note_inserted":"メモが追加されました","toast_note_updated":"メモが更新されました","toast_note_deleted":"メモが削除されました","toast_category_added":"カテゴリーが追加されました","toast_category_updated":"カテゴリーが更新されました","toast_note_category_updated":"メモのカテゴリーが更新されました","toast_category_deleted":"カテゴリーとメモが削除されました","alert_delete_note":"このメモを削除してもよろしいですか？","alert_delete_category":"このカテゴリーとすべてのメモを削除してもよろしいですか？","alert_text_link":"まずテキストを選択してください","settings_title":"アカウント","note_stats":"メモ","categorie_stats":"カテゴリー","drag":"サイドバーの項目を保持してドラッグし、リスト内で希望の順序に並べ替えます。"},
      ko: {"title":"안녕하세요, ","title_new_note":"새 메모","change_email_title":"이메일 변경","change_email_text":"새 이메일을 입력하고 전송된 링크에 접속하세요.","change_email_input":"새 이메일","change_email_button":"링크 전송","change_password_title":"비밀번호 변경","change_password_text":"접속 요청이 이메일로 전송됩니다.","change_password_button":"요청 전송","manage_subscription_title":"구독 관리","manage_subscription_text":"Stripe 구독 포털이 새 창에서 열립니다.","manage_subscription_button":"고객 포털 열기","logout_title":"로그아웃","logout_text":"당신은 자동으로 Notepad PRO 에 ","logout_text_2":" 로 로그인되어 있습니다. 확장 기능은 로그인 시에만 사용할 수 있습니다.","logout_button":"로그아웃","note_title_placeholder":"제목","note_text_placeholder":"여기에 내용을 입력하세요...","note_categories_text":"카테고리","note_read_text":"읽기","note_pdf_text":"PDF 파일","note_pdf_image_text":"PDF 이미지","note_txt_text":"TXT 파일","note_delete_text":"삭제","category_header":"카테고리","category_name_input":"카테고리 이름","category_add_button":"추가","category_new_category":"새 카테고리","category_edit_category":"카테고리 편집: ","category_insert_button":"삽입","category_edit_button":"편집","category_delete_button":"삭제","category_cancel_button":"취소","stripe_text":"Notepad PRO를 구독하면 다음을 얻습니다:<br/><br/>● 무제한 메모 및 카테고리<br/>● 메모를 TXT 및 PDF로 내보내기<br/>● 할 일 목록 작성<br/><br/>플랜 선택:<br/><br/>● 월간 플랜 R&#36; 4.99<br/>● 연간 플랜 R&#36; 49.99 (2개월 절약)","stripe_monthly":"월간","stripe_yearly":"연간","toast_change_email":"인증 이메일을 보냈습니다: ","toast_error_change_email":"이메일을 변경하려면 로그아웃 후 다시 로그인하세요.","toast_reset_password":"비밀번호 재설정 이메일을 보냈습니다: ","toast_note_inserted":"메모가 추가되었습니다","toast_note_updated":"메모가 업데이트되었습니다","toast_note_deleted":"메모가 삭제되었습니다","toast_category_added":"카테고리가 추가되었습니다","toast_category_updated":"카테고리가 업데이트되었습니다","toast_note_category_updated":"메모 카테고리가 업데이트되었습니다","toast_category_deleted":"카테고리와 메모가 삭제되었습니다","alert_delete_note":"이 메모를 삭제하시겠습니까?","alert_delete_category":"이 카테고리와 모든 메모를 삭제하시겠습니까?","alert_text_link":"먼저 텍스트를 선택하세요","settings_title":"계정","note_stats":"메모","categorie_stats":"카테고리","drag":"사이드바 항목을 잡고 끌어 원하는 순서로 정렬하세요."},
      ru: {"title":"Привет, ","title_new_note":"Новая заметка","change_email_title":"Сменить email","change_email_text":"Введите новый email и перейдите по ссылке, отправленной на него.","change_email_input":"Новый email","change_email_button":"Отправить ссылку","change_password_title":"Сменить пароль","change_password_text":"Запрос на смену будет отправлен на вашу почту.","change_password_button":"Отправить запрос","manage_subscription_title":"Управление подпиской","manage_subscription_text":"Портал подписки Stripe откроется в новом окне.","manage_subscription_button":"Открыть портал клиента","logout_title":"Выйти","logout_text":"Вы автоматически вошли в Notepad PRO как ","logout_text_2":" Расширение доступно только при входе в аккаунт.","logout_button":"ВЫЙТИ","note_title_placeholder":"Заголовок","note_text_placeholder":"Ваш текст здесь...","note_categories_text":"Категории","note_read_text":"Читать","note_pdf_text":"PDF-файл","note_pdf_image_text":"PDF-изображение","note_txt_text":"TXT-файл","note_delete_text":"Удалить","category_header":"Категория","category_name_input":"Название категории","category_add_button":"Добавить","category_new_category":"Новая категория","category_edit_category":"Редактировать категорию: ","category_insert_button":"Вставить","category_edit_button":"Редактировать","category_delete_button":"Удалить","category_cancel_button":"Отмена","stripe_text":"Подписавшись на Notepad PRO, вы получите:<br/><br/>● Неограниченные заметки и категории<br/>● Экспорт заметок в TXT и PDF<br/>● Создание списков задач<br/><br/>ВЫБЕРИТЕ ПЛАН:<br/><br/>● Ежемесячно R&#36; 4.99<br/>● Ежегодно R&#36; 49.99 (экономия 2 месяца)","stripe_monthly":"ЕЖЕМЕСЯЧНО","stripe_yearly":"ЕЖЕГОДНО","toast_change_email":"Проверочное письмо отправлено на: ","toast_error_change_email":"Выйдите из аккаунта и войдите снова, чтобы изменить email.","toast_reset_password":"Письмо для сброса пароля отправлено на ","toast_note_inserted":"Заметка добавлена","toast_note_updated":"Заметка обновлена","toast_note_deleted":"Заметка удалена","toast_category_added":"Категория добавлена","toast_category_updated":"Категория обновлена","toast_note_category_updated":"Категория заметки обновлена","toast_category_deleted":"Категория и заметки удалены","alert_delete_note":"Вы уверены, что хотите удалить эту заметку?","alert_delete_category":"Вы уверены, что хотите удалить эту категорию и все её заметки?","alert_text_link":"Сначала выберите текст","settings_title":"Аккаунт","note_stats":"ЗАМЕТКИ","categorie_stats":"КАТЕГОРИИ","drag":"Удерживайте, перетаскивайте элементы боковой панели, чтобы расположить их в нужном порядке."},
      zh_CN: {"title":"您好，","title_new_note":"新建笔记","change_email_title":"更改邮箱","change_email_text":"请输入新邮箱，并访问发送到该邮箱的链接。","change_email_input":"新邮箱","change_email_button":"发送链接","change_password_title":"更改密码","change_password_text":"重置请求将发送到您的邮箱。","change_password_button":"发送请求","manage_subscription_title":"管理订阅","manage_subscription_text":"Stripe 客户门户将在新窗口中打开。","manage_subscription_button":"打开客户门户","logout_title":"退出登录","logout_text":"您已使用 ","logout_text_2":" 自动登录 Notepad PRO。扩展仅在登录时可用。","logout_button":"退出","note_title_placeholder":"标题","note_text_placeholder":"在这里输入内容...","note_categories_text":"分类","note_read_text":"查看","note_pdf_text":"PDF文件","note_pdf_image_text":"PDF图片","note_txt_text":"TXT文件","note_delete_text":"删除","category_header":"分类","category_name_input":"分类名称","category_add_button":"添加","category_new_category":"新建分类","category_edit_category":"编辑分类: ","category_insert_button":"插入","category_edit_button":"编辑","category_delete_button":"删除","category_cancel_button":"取消","stripe_text":"订阅 Notepad PRO，您将获得：<br/><br/>● 无限笔记与分类<br/>● 导出笔记为 TXT 与 PDF<br/>● 创建任务列表<br/><br/>请选择订阅方案：<br/><br/>● 每月 $4.99<br/>● 每年 $49.99（节省两个月）","stripe_monthly":"每月","stripe_yearly":"每年","toast_change_email":"验证邮件已发送到: ","toast_error_change_email":"请退出并重新登录以更改邮箱。","toast_reset_password":"重置密码邮件已发送到 ","toast_note_inserted":"笔记已添加","toast_note_updated":"笔记已更新","toast_note_deleted":"笔记已删除","toast_category_added":"分类已添加","toast_category_updated":"分类已更新","toast_note_category_updated":"笔记分类已更新","toast_category_deleted":"分类及其笔记已删除","alert_delete_note":"确定要删除此笔记吗？","alert_delete_category":"确定要删除此分类及其所有笔记吗？","alert_text_link":"请先选择文本","settings_title":"账户","note_stats":"笔记","categorie_stats":"分类","drag":"按住并拖动侧边栏的项目以重新排序。"}
    };

    function detectLang() {
      const saved = localStorage.getItem('np_lang');
      if (saved && LOCALES[saved]) return saved;
      const nav = navigator.language || 'en';
      if (nav.startsWith('pt')) return 'pt_BR';
      if (nav.startsWith('zh')) return 'zh_CN';
      const short = nav.split('-')[0];
      return LOCALES[short] ? short : 'en';
    }

    const currentLang = detectLang();
    function t(key) { return (LOCALES[currentLang] || LOCALES['en'])[key] || key; }

    // ── App ───────────────────────────────────────────────────────────────────
    const db = firebase.firestore();
    const auth = firebase.auth();

    document.addEventListener('DOMContentLoaded', () => {
      function toast(texto) {
        let old = document.getElementById('noti');
        if (old) old.parentElement.remove();
        let divToast = document.createElement('div');
        divToast.innerHTML = `<div id="noti">${texto}</div>`;
        document.body.appendChild(divToast);
        document.getElementById('noti').className = 'show';
        setTimeout(() => { if (divToast.parentElement) document.body.removeChild(divToast); }, 3500);
      }

      auth.onAuthStateChanged(async (user) => {
        if (!user) { window.location.href = 'login'; return; }

        // Show subscription section if subscriber
        db.collection('users').doc(user.uid).get().then(doc => {
          if (doc.exists && doc.data().subscriber) document.getElementById('subscription').style.display = 'flex';
        });

        // Apply i18n texts
        function loadi18n() {
          document.getElementById('title').textContent = t('title');
          document.getElementById('change-email-title').textContent = t('change_email_title');
          document.getElementById('change-email-text').textContent = t('change_email_text');
          document.getElementById('change-email-input').placeholder = t('change_email_input');
          document.getElementById('change-email-button').textContent = t('change_email_button');
          document.getElementById('change-password-title').textContent = t('change_password_title');
          document.getElementById('change-password-text').textContent = t('change_password_text');
          document.getElementById('change-password-button').innerHTML = t('change_password_button');
          document.getElementById('manage-subscription-title').textContent = t('manage_subscription_title');
          document.getElementById('manage-subscription-text').textContent = t('manage_subscription_text');
          document.getElementById('manage-subscription-button').innerHTML = t('manage_subscription_button');
          document.getElementById('logout-title').textContent = t('logout_title');
          document.getElementById('logout-text').textContent = t('logout_text');
          document.getElementById('logout-text-2').textContent = t('logout_text_2');
          document.getElementById('logout-button').innerHTML = t('logout_button');
          document.getElementById('note-title').placeholder = t('note_title_placeholder');
          document.getElementById('note-text').dataset.placeholder = t('note_text_placeholder');
          document.getElementById('note-categories-text').innerHTML = t('note_categories_text');
          document.getElementById('note-read-text').innerHTML = t('note_read_text');
          document.getElementById('note-pdf-text').innerHTML = t('note_pdf_text');
          document.getElementById('note-pdf-image-text').innerHTML = t('note_pdf_image_text');
          document.getElementById('note-txt-text').innerHTML = t('note_txt_text');
          document.getElementById('note-delete-text').innerHTML = t('note_delete_text');
          document.getElementById('category-header').textContent = t('category_header');
          document.getElementById('category-name-input').placeholder = t('category_name_input');
          document.getElementById('category-insert-button').innerHTML = t('category_insert_button');
          document.getElementById('category-delete-button').innerHTML = t('category_delete_button');
          document.getElementById('category-cancel-button').innerHTML = t('category_cancel_button');
          document.getElementById('stripe-text').innerHTML = t('stripe_text');
          document.getElementById('stripe-monthly').innerHTML = t('stripe_monthly');
          document.getElementById('stripe-yearly').innerHTML = t('stripe_yearly');
          document.getElementById('noteStats').innerHTML = t('note_stats');
          document.getElementById('categorieStats').innerHTML = t('categorie_stats');
          document.getElementById('drag').innerHTML = t('drag');
        }
        loadi18n();

        // Constants
        const wall = document.getElementById('wall');
        const loadingMessage = document.getElementById('loading-message');
        const textFormat = document.getElementById('text-format');
        const logo = document.querySelector('.logo');
        const addButton = document.querySelector('.add-button');
        const itemList = document.querySelector('.item-list');
        const screens = document.querySelectorAll('.screen');
        const home = document.getElementById('home');
        const settings = document.getElementById('settings');
        const settingsBtn = document.getElementById('settings-button');
        const noteScreen = document.getElementById('note');
        const noteTitle = document.getElementById('note-title');
        const noteText = document.getElementById('note-text');
        const noteCategory = document.getElementById('note-category');
        const noteDeleteBtn = document.getElementById('note-delete-button');
        const dropdownToggle = document.querySelector('.dropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        const noteButton = document.getElementById('note-button');
        const noteMenu = document.getElementById('note-menu');
        const noteCategoriesButton = document.getElementById('note-categories-button');
        const noteReadButton = document.getElementById('note-read-button');
        const notePDFButton = document.getElementById('note-pdf-button');
        const notePDFImageButton = document.getElementById('note-pdf-image-button');
        const noteTXTButton = document.getElementById('note-txt-button');
        const saveCategoryBtn = document.getElementById('category-insert-button');
        const cancelCategoryBtn = document.getElementById('category-cancel-button');
        const deleteCategoryBtn = document.getElementById('category-delete-button');
        const categoryNameInput = document.getElementById('category-name-input');
        const categoryOverlay = document.getElementById('categoryOverlay');
        const categoryModal = document.getElementById('categoryModal');
        const noteCategoryModal = document.getElementById('noteCategoryModal');
        const noteCategoryButton = document.getElementById('note-category-button');
        const stripeModal = document.getElementById('stripeModal');
        const categoryHeader = document.getElementById('category-header');
        const closeModal = document.getElementById('closeModal');
        const logout = document.getElementById('logout-button');
        const userEmail = document.getElementById('userEmail');
        const emailInput = document.getElementById('change-email-input');
        const titleHeader = document.getElementById('title');

        // Variables
        let unsubscribeNotes = null;
        let currentNoteId = null;
        let editingCategoryId = null;
        let selectedCategoryFilter = null;
        let sortableInstance = null;
        let savedSelection = null;
        let saveTimeout = null;

        noteText.addEventListener('click', function(e) {
          let target = e.target;
          while (target && target !== noteText) {
            if (target.tagName === 'A' && target.href) { e.preventDefault(); e.stopPropagation(); window.open(target.href, '_blank'); return; }
            target = target.parentElement;
          }
        });

        function handleCheckboxChange() { saveNoteWithDebounce(); }

        function saveNoteWithDebounce() {
          if (saveTimeout) clearTimeout(saveTimeout);
          saveTimeout = setTimeout(() => saveCurrentNote(), 1000);
        }

        function saveCurrentNote() {
          if (!currentNoteId || !auth.currentUser) return;
          const title = noteTitle.value.trim();
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = noteText.innerHTML;
          const checkboxes = tempDiv.querySelectorAll('input[type="checkbox"]');
          const origCheckboxes = noteText.querySelectorAll('input[type="checkbox"]');
          checkboxes.forEach((cb, i) => { if (origCheckboxes[i]?.checked) cb.setAttribute('checked','checked'); else cb.removeAttribute('checked'); });
          const text = tempDiv.innerHTML.trim();
          if (!title) return;
          db.collection('users').doc(auth.currentUser.uid).collection('notes').doc(currentNoteId).update({ title, text }).catch(console.error);
        }

        function restoreCheckboxListeners() {
          noteText.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            if (cb.hasAttribute('checked')) cb.checked = true;
            cb.removeEventListener('change', handleCheckboxChange);
            cb.addEventListener('change', handleCheckboxChange);
          });
        }

        function saveSelection() {
          const sel = window.getSelection();
          if (sel.rangeCount > 0) { const r = sel.getRangeAt(0); if (noteText.contains(r.startContainer)) return r.cloneRange(); }
          return null;
        }

        function restoreSelection(range) {
          if (range) {
            const sel = window.getSelection(); sel.removeAllRanges();
            try { sel.addRange(range); } catch(e) { const r = document.createRange(); r.selectNodeContents(noteText); r.collapse(false); sel.addRange(r); }
          }
        }

        // Initialize
        const homeTitle = `${t('title')} ${user.email}`;
        db.collection('users').doc(user.uid).collection('categories').where('protected','==',true).limit(1).get().then(snapshot => {
          const doc = snapshot.docs[0];
          selectedCategoryFilter = doc.id;
          document.getElementById('dropdownLabel').innerText = doc.data().name;
          renderNotes(user.uid);
          renderCategories(user.uid);
          setTitle(homeTitle);
          userEmail.innerText = user.email;
          updateCounters(user.uid);
          wall.remove();

          logout.addEventListener('click', () => {
            firebase.auth().signOut().then(() => setTimeout(() => { window.location.href = 'login'; }, 500));
          });

          function updateCounters(uid) {
            db.collection('users').doc(uid).collection('notes').onSnapshot(s => { document.getElementById('noteNumber').textContent = s.size; });
            db.collection('users').doc(uid).collection('categories').onSnapshot(s => { document.getElementById('categorieNumber').textContent = s.size; });
          }

          function showScreen(screen) { screens.forEach(s => s.classList.remove('active')); screen.classList.add('active'); }
          function setTitle(texto) { titleHeader.innerText = texto; }

          function clearNoteInputs() {
            noteTitle.value = ''; noteText.innerHTML = ''; currentNoteId = null;
            itemList.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
            textFormat.style.display = 'none'; titleHeader.style.display = 'flex';
          }

          async function getNextOrderValue(uid, categoryId) {
            const snap = await db.collection('users').doc(uid).collection('notes').where('categoryId','==',categoryId).orderBy('order','desc').limit(1).get();
            return snap.empty ? 1 : (snap.docs[0].data().order || 0) + 1;
          }

          async function updateNoteOrder(uid, noteIds) {
            const batch = db.batch();
            noteIds.forEach((id, i) => batch.update(db.collection('users').doc(uid).collection('notes').doc(id), { order: i+1 }));
            await batch.commit().catch(console.error);
          }

          function renderNotes(uid) {
            if (unsubscribeNotes) unsubscribeNotes();
            let ref = db.collection('users').doc(uid).collection('notes');
            if (selectedCategoryFilter) ref = ref.where('categoryId','==',selectedCategoryFilter);
            ref = ref.orderBy('order','asc');
            unsubscribeNotes = ref.onSnapshot(snapshot => {
              if (sortableInstance) { try { sortableInstance.destroy(); } catch(e) {} sortableInstance = null; }
              itemList.innerHTML = '';
              snapshot.forEach(doc => {
                const li = document.createElement('li');
                li.textContent = doc.data().title;
                li.setAttribute('data-id', doc.id);
                li.addEventListener('click', () => {
                  itemList.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
                  li.classList.add('selected');
                  currentNoteId = doc.id;
                  noteTitle.value = doc.data().title;
                  noteText.innerHTML = doc.data().text || '';
                  restoreCheckboxListeners();
                  titleHeader.style.display = 'none'; textFormat.style.display = 'flex';
                  showScreen(noteScreen); window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                itemList.appendChild(li);
              });
              requestAnimationFrame(() => {
                if (itemList.children.length > 0 && typeof Sortable !== 'undefined') {
                  try {
                    sortableInstance = Sortable.create(itemList, { animation: 150, ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', dragClass: 'sortable-drag',
                      onEnd: () => { const ids = Array.from(itemList.children).map(li => li.getAttribute('data-id')); updateNoteOrder(uid, ids); }
                    });
                  } catch(e) {}
                }
              });
              loadingMessage.style.display = 'none';
              if (currentNoteId) { const el = document.querySelector(`[data-id="${currentNoteId}"]`); if (el) el.classList.add('selected'); }
            });
          }

          function renderCategories(uid) {
            db.collection('users').doc(uid).collection('categories').orderBy('protected','desc').orderBy('name','asc').onSnapshot(snapshot => {
              dropdownMenu.innerHTML = '';
              const options = [];
              snapshot.forEach(doc => {
                const data = doc.data();
                options.push(`<option value="${doc.id}">${data.name}</option>`);
                const div = document.createElement('div'); div.className = 'dropdown-item'; div.textContent = data.name;
                div.addEventListener('click', () => {
                  selectedCategoryFilter = doc.id; document.getElementById('dropdownLabel').innerText = data.name;
                  showScreen(home); setTitle(homeTitle); clearNoteInputs(); renderNotes(auth.currentUser.uid);
                });
                const cfg = document.createElement('div');
                cfg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>`;
                cfg.classList.add('config-icon');
                cfg.addEventListener('click', e => {
                  e.stopPropagation(); showScreen(home); setTitle(homeTitle); clearNoteInputs(); dropdownMenu.style.display = 'none';
                  categoryHeader.innerText = `${t('category_edit_category')} ${data.name}`; editingCategoryId = doc.id; categoryNameInput.value = data.name;
                  saveCategoryBtn.textContent = t('category_edit_button'); deleteCategoryBtn.style.display = 'flex';
                  if (data.protected) { deleteCategoryBtn.disabled = true; deleteCategoryBtn.style.opacity = '0.5'; deleteCategoryBtn.style.cursor = 'not-allowed'; }
                  else { deleteCategoryBtn.disabled = false; deleteCategoryBtn.style.opacity = '1'; deleteCategoryBtn.style.cursor = 'pointer'; }
                  categoryOverlay.style.display = 'block'; categoryModal.style.display = 'block';
                });
                div.appendChild(cfg); dropdownMenu.appendChild(div);
              });

              const addBtn = document.createElement('div'); addBtn.className = 'dropdown-item'; addBtn.id = 'add-category';
              addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>${t('category_add_button')}`;
              addBtn.addEventListener('click', async () => {
                const u = auth.currentUser; if (!u) return;
                try {
                  const uDoc = await db.collection('users').doc(u.uid).get();
                  const isSub = uDoc.exists && uDoc.data().subscriber;
                  const catSnap = await db.collection('users').doc(u.uid).collection('categories').get();
                  if (catSnap.size >= 3 && !isSub) { categoryOverlay.style.display = 'block'; stripeModal.style.display = 'block'; return; }
                  editingCategoryId = null; categoryNameInput.value = ''; saveCategoryBtn.innerHTML = t('category_insert_button');
                  categoryHeader.innerText = t('category_new_category'); showScreen(home); setTitle(homeTitle); clearNoteInputs();
                  deleteCategoryBtn.style.display = 'none'; categoryOverlay.style.display = 'block'; categoryModal.style.display = 'block';
                } catch(e) { console.error(e); }
              });
              dropdownMenu.appendChild(addBtn);
              noteCategory.innerHTML = options.join('');
            });
          }

          // Listeners
          logo.addEventListener('click', () => { showScreen(home); setTitle(homeTitle); clearNoteInputs(); });
          settingsBtn.addEventListener('click', () => { showScreen(settings); setTitle(t('settings_title')); clearNoteInputs(); });

          addButton.addEventListener('click', async () => {
            const u = auth.currentUser; if (!u) return;
            try {
              const uDoc = await db.collection('users').doc(u.uid).get();
              const isSub = uDoc.exists && uDoc.data().subscriber;
              const noteSnap = await db.collection('users').doc(u.uid).collection('notes').get();
              if (noteSnap.size >= 10 && !isSub) { categoryOverlay.style.display = 'block'; stripeModal.style.display = 'block'; return; }
              const order = await getNextOrderValue(u.uid, selectedCategoryFilter);
              const newRef = await db.collection('users').doc(u.uid).collection('notes').add({ title: t('title_new_note'), text: '', categoryId: selectedCategoryFilter, order });
              setTimeout(() => { const el = document.querySelector(`[data-id="${newRef.id}"]`); if (el) { itemList.querySelectorAll('li').forEach(li => li.classList.remove('selected')); el.classList.add('selected'); } }, 200);
              currentNoteId = newRef.id; noteTitle.value = t('title_new_note'); noteText.innerHTML = '';
              showScreen(noteScreen); titleHeader.style.display = 'none'; textFormat.style.display = 'flex';
              setTimeout(() => noteTitle.focus(), 100); toast(t('toast_note_inserted'));
            } catch(e) { console.error(e); }
          });

          noteTitle.addEventListener('input', () => { if (currentNoteId) { setTitle(noteTitle.value || 'Untitled'); saveNoteWithDebounce(); } });
          noteText.addEventListener('input', () => { if (currentNoteId) saveNoteWithDebounce(); });

          document.addEventListener('selectionchange', () => {
            const sel = window.getSelection(); if (!sel || !sel.rangeCount) return;
            const r = sel.getRangeAt(0);
            if (noteText?.contains(r.startContainer) && noteText?.contains(r.endContainer)) savedSelection = r.cloneRange();
          });

          ['mouseup','keyup'].forEach(ev => noteText.addEventListener(ev, () => setTimeout(() => {
            const sel = window.getSelection(); if (sel.rangeCount > 0) { const r = sel.getRangeAt(0); if (noteText.contains(r.startContainer) && noteText.contains(r.endContainer)) savedSelection = r.cloneRange(); }
          }, 10)));

          noteDeleteBtn.addEventListener('click', () => {
            if (!confirm(t('alert_delete_note'))) return;
            const u = auth.currentUser; if (!u || !currentNoteId) return;
            db.collection('users').doc(u.uid).collection('notes').doc(currentNoteId).delete().then(() => { showScreen(home); setTitle(homeTitle); clearNoteInputs(); toast(t('toast_note_deleted')); });
          });

          cancelCategoryBtn.addEventListener('click', () => { categoryOverlay.style.display = 'none'; categoryModal.style.display = 'none'; });

          saveCategoryBtn.addEventListener('click', () => {
            const u = auth.currentUser; const name = categoryNameInput.value.trim(); if (!u || !name) return;
            const ref = db.collection('users').doc(u.uid).collection('categories');
            if (editingCategoryId) {
              ref.doc(editingCategoryId).update({ name }).then(() => {
                categoryOverlay.style.display = 'none'; categoryModal.style.display = 'none';
                document.getElementById('dropdownLabel').innerText = name; toast(t('toast_category_updated'));
              });
            } else {
              ref.add({ name, protected: false }).then(() => { categoryOverlay.style.display = 'none'; categoryModal.style.display = 'none'; toast(t('toast_category_added')); });
            }
          });

          deleteCategoryBtn.addEventListener('click', () => {
            const uid = auth.currentUser.uid;
            if (!confirm(t('alert_delete_category'))) return;
            const u = auth.currentUser; if (!u || !editingCategoryId) return;
            const uRef = db.collection('users').doc(u.uid);
            uRef.collection('notes').where('categoryId','==',editingCategoryId).get().then(snap => {
              const batch = db.batch(); snap.forEach(doc => batch.delete(doc.ref)); return batch.commit();
            }).then(() => uRef.collection('categories').doc(editingCategoryId).delete())
            .then(() => db.collection('users').doc(uid).collection('categories').where('protected','==',true).limit(1).get())
            .then(pSnap => {
              const pDoc = pSnap.docs[0]; selectedCategoryFilter = pDoc.id;
              document.getElementById('dropdownLabel').innerText = pDoc.data().name;
              categoryOverlay.style.display = 'none'; categoryModal.style.display = 'none';
              renderNotes(uid); showScreen(home); setTitle(homeTitle); clearNoteInputs(); toast(t('toast_category_deleted'));
            });
          });

          dropdownToggle.addEventListener('click', e => { e.stopPropagation(); dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex'; });
          noteButton.addEventListener('click', e => { e.stopPropagation(); noteMenu.style.display = noteMenu.style.display === 'flex' ? 'none' : 'flex'; });

          noteCategoriesButton.addEventListener('click', () => {
            if (currentNoteId) db.collection('users').doc(auth.currentUser.uid).collection('notes').doc(currentNoteId).get().then(doc => { if (doc.exists) noteCategory.value = doc.data().categoryId; });
            categoryOverlay.style.display = 'block'; noteCategoryModal.style.display = 'block';
          });

          noteReadButton.addEventListener('click', () => {
            if (!currentNoteId) return;
            window.open(`r?noteId=${currentNoteId}`, '_blank');
            noteMenu.style.display = 'none';
          });

          notePDFButton.addEventListener('click', async () => {
            if (!currentNoteId) return;
            const u = auth.currentUser; if (!u) return;
            try {
              const uDoc = await db.collection('users').doc(u.uid).get();
              if (!uDoc.exists || !uDoc.data().subscriber) { categoryOverlay.style.display = 'block'; stripeModal.style.display = 'block'; return; }
            } catch(e) { return; }
            try {
              const title = noteTitle.value.trim(); const content = noteText.innerHTML;
              const { jsPDF } = window.jspdf; const doc = new jsPDF('p','mm','a4');
              const margin = 20; let y = margin; const pageWidth = 170; const pageHeight = 270;
              const checkPageBreak = (h=7) => { if (y+h > pageHeight) { doc.addPage(); y = margin; } };
              doc.setFontSize(18); doc.setFont(undefined,'bold');
              doc.splitTextToSize(title, pageWidth).forEach(l => { checkPageBreak(10); doc.text(l, margin, y); y += 10; }); y += 5;
              const tempDiv = document.createElement('div'); tempDiv.innerHTML = content;
              const processElement = (el, fs=12, style='normal') => {
                Array.from(el.childNodes).forEach(child => {
                  if (child.nodeType === Node.TEXT_NODE) { const txt = child.textContent.trim(); if (txt) { doc.setFontSize(fs); doc.setFont(undefined,style); doc.splitTextToSize(txt, pageWidth).forEach(l => { checkPageBreak(); doc.text(l, margin, y); y += 7; }); } }
                  else if (child.nodeType === Node.ELEMENT_NODE) {
                    const tag = child.tagName.toLowerCase(); let nfs = fs; let ns = style;
                    if (tag==='b'||tag==='strong') ns='bold'; else if (tag==='i'||tag==='em') ns='italic'; else if (tag==='u') ns='underline';
                    if (child.style?.fontSize) { const sv = parseInt(child.style.fontSize); if (sv) nfs = Math.max(8, Math.min(24, sv*0.75)); }
                    if (tag==='br') { y += 7; } else if (tag==='p'||tag==='div') { if (child.textContent.trim()) { processElement(child,nfs,ns); y += 3; } }
                    else if (tag==='ul'||tag==='ol') { child.querySelectorAll('li').forEach((item,i) => { const prefix = tag==='ol'?`${i+1}. `:'• '; const txt = item.textContent.trim(); if (txt) { doc.setFontSize(nfs); doc.setFont(undefined,ns); doc.splitTextToSize(prefix+txt, pageWidth-10).forEach((l,li) => { checkPageBreak(); doc.text(l, margin+(li>0?10:0), y); y+=7; }); } }); y+=3; }
                    else if (tag==='input'&&child.type==='checkbox') { const chk = child.checked?'☑':'☐'; let txt=''; let n=child.nextSibling; while(n&&n.nodeType===Node.TEXT_NODE){txt+=n.textContent;n=n.nextSibling;} doc.setFontSize(nfs); doc.setFont(undefined,ns); checkPageBreak(); doc.text(`${chk} ${txt.trim()}`, margin, y); y+=7; }
                    else if (tag==='a') { const href = child.getAttribute('href'); doc.setFontSize(nfs); doc.setFont(undefined,ns); doc.setTextColor(0,102,204); doc.splitTextToSize(`${child.textContent} (${href})`, pageWidth).forEach(l => { checkPageBreak(); doc.text(l,margin,y); y+=7; }); doc.setTextColor(0,0,0); }
                    else processElement(child, nfs, ns);
                  }
                });
              };
              processElement(tempDiv); doc.save(`${title}.pdf`); noteMenu.style.display = 'none';
            } catch(e) { console.error(e); }
          });

          notePDFImageButton.addEventListener('click', async () => {
            if (!currentNoteId) return;
            const u = auth.currentUser; if (!u) return;
            try {
              const uDoc = await db.collection('users').doc(u.uid).get();
              if (!uDoc.exists || !uDoc.data().subscriber) { categoryOverlay.style.display = 'block'; stripeModal.style.display = 'block'; return; }
            } catch(e) { return; }
            try {
              const title = noteTitle.value.trim(); const content = noteText.innerHTML;
              const tempContainer = document.createElement('div');
              tempContainer.style.cssText = 'position:absolute;left:-9999px;top:0;width:700px;padding:40px;background:white;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.6;color:#333;';
              const titleEl = document.createElement('h1'); titleEl.style.cssText = 'font-size:24px;font-weight:bold;margin:0 0 20px 0;color:#000;word-wrap:break-word;'; titleEl.textContent = title;
              const contentEl = document.createElement('div'); contentEl.style.cssText = 'font-size:14px;line-height:1.6;'; contentEl.innerHTML = content;
              tempContainer.appendChild(titleEl); tempContainer.appendChild(contentEl); document.body.appendChild(tempContainer);
              await new Promise(r => setTimeout(r, 100));
              const canvas = await html2canvas(tempContainer, { scale:2, useCORS:true, allowTaint:true, backgroundColor:'#ffffff', width:700, height:tempContainer.scrollHeight });
              document.body.removeChild(tempContainer);
              const { jsPDF } = window.jspdf; const imgData = canvas.toDataURL('image/png');
              const imgWidth = 210; const pageHeight = 295; const imgHeight = (canvas.height*imgWidth)/canvas.width;
              let heightLeft = imgHeight; const doc = new jsPDF('p','mm','a4'); let position = 0;
              doc.addImage(imgData,'PNG',0,position,imgWidth,imgHeight); heightLeft -= pageHeight;
              while (heightLeft >= 0) { position = heightLeft-imgHeight; doc.addPage(); doc.addImage(imgData,'PNG',0,position,imgWidth,imgHeight); heightLeft -= pageHeight; }
              doc.save(`${title}.pdf`); noteMenu.style.display = 'none';
            } catch(e) { console.error(e); }
          });

          noteTXTButton.addEventListener('click', () => {
            if (!currentNoteId) return;
            const title = noteTitle.value.trim(); const content = noteText.innerText || '';
            const blob = new Blob([`${title}\n\n${content}`], { type:'text/plain' });
            const url = URL.createObjectURL(blob); const a = document.createElement('a');
            a.href = url; a.download = `${title}.txt`; document.body.appendChild(a); a.click();
            setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
          });

          noteCategoryButton.addEventListener('click', () => {
            const selCatId = noteCategory.value;
            db.collection('users').doc(user.uid).collection('notes').doc(currentNoteId).update({ categoryId: selCatId }).then(() => {
              categoryOverlay.style.display = 'none'; noteCategoryModal.style.display = 'none';
              if (selCatId !== selectedCategoryFilter) renderNotes(user.uid);
              toast(t('toast_note_category_updated'));
            });
          });

          document.addEventListener('click', e => {
            if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) { dropdownMenu.style.display = 'none'; noteMenu.style.display = 'none'; }
          });

          document.getElementById('email-form').addEventListener('submit', e => {
            e.preventDefault(); const newEmail = emailInput.value.trim();
            user.verifyBeforeUpdateEmail(newEmail).then(() => { emailInput.value = ''; toast(t('toast_change_email') + newEmail); }).catch(() => toast(t('toast_error_change_email')));
          });

          document.getElementById('change-password-button').addEventListener('click', () => {
            firebase.auth().sendPasswordResetEmail(user.email).then(() => toast(t('toast_reset_password') + user.email)).catch(console.error);
          });

          document.getElementById('manage-subscription-button').addEventListener('click', () => {
            window.open(`https://billing.stripe.com/p/login/dR63egdBu2qnfwkbII?prefilled_email=${encodeURIComponent(user.email)}`, '_blank');
          });

          document.getElementById('stripe-monthly').addEventListener('click', () => window.open(`https://landowski.github.io/notepad-pro/stripe-monthly?email=${encodeURIComponent(user.email)}`, '_blank'));
          document.getElementById('stripe-yearly').addEventListener('click', () => window.open(`https://landowski.github.io/notepad-pro/stripe-yearly?email=${encodeURIComponent(user.email)}`, '_blank'));
          closeModal.addEventListener('click', () => { categoryOverlay.style.display = 'none'; stripeModal.style.display = 'none'; });

          function restoreSelectionAndApplyCommand(cmd, val=null) {
            if (savedSelection) { restoreSelection(savedSelection); document.execCommand(cmd, false, val); savedSelection = saveSelection(); }
          }

          function cleanupFontSizeSpans(newSpan) {
            if (!newSpan.textContent.trim()) { newSpan.parentNode.removeChild(newSpan); return; }
            let parent = newSpan.parentNode;
            while (parent !== noteText && parent.nodeType === Node.ELEMENT_NODE) {
              if (parent.style.fontSize === newSpan.style.fontSize) {
                const gp = parent.parentNode;
                while (parent.firstChild) { if (parent.firstChild===newSpan) gp.insertBefore(newSpan.firstChild,parent); else gp.insertBefore(parent.firstChild,parent); }
                gp.removeChild(parent); parent = gp;
              } else { parent = parent.parentNode; }
            }
            newSpan.querySelectorAll('span').forEach(child => { if (child.style.fontSize===newSpan.style.fontSize) { while(child.firstChild) newSpan.insertBefore(child.firstChild,child); newSpan.removeChild(child); } });
          }

          document.getElementById('undo').addEventListener('click', () => document.execCommand('undo'));
          document.getElementById('redo').addEventListener('click', () => document.execCommand('redo'));
          document.getElementById('bold').addEventListener('click', () => restoreSelectionAndApplyCommand('bold'));
          document.getElementById('italic').addEventListener('click', () => restoreSelectionAndApplyCommand('italic'));
          document.getElementById('underline').addEventListener('click', () => restoreSelectionAndApplyCommand('underline'));
          document.getElementById('highlight').addEventListener('click', () => restoreSelectionAndApplyCommand('hiliteColor', 'ffff90'));
          document.getElementById('numbered-list').addEventListener('click', () => restoreSelectionAndApplyCommand('insertOrderedList'));
          document.getElementById('bullet-list').addEventListener('click', () => restoreSelectionAndApplyCommand('insertUnorderedList'));

          document.getElementById('link').addEventListener('click', e => {
            e.preventDefault(); e.stopPropagation();
            const sel = window.getSelection();
            let rangeToUse = null;
            if (sel.rangeCount > 0 && noteText.contains(sel.anchorNode)) rangeToUse = sel.getRangeAt(0);
            else if (savedSelection && noteText.contains(savedSelection.startContainer)) rangeToUse = savedSelection;
            if (!rangeToUse || rangeToUse.collapsed) { alert(t('alert_text_link')); return; }
            const url = prompt('Link:', 'https://'); if (!url || url.trim()==='' || url.trim()==='https://') return;
            noteText.focus(); restoreSelection(rangeToUse); document.execCommand('createLink', false, url);
            savedSelection = saveSelection(); saveNoteWithDebounce();
          });

          document.getElementById('clear').addEventListener('click', () => {
            if (savedSelection) {
              const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(savedSelection);
              document.execCommand('removeFormat'); document.execCommand('insertOrderedList',false,null); document.execCommand('insertOrderedList',false,null);
              document.execCommand('insertUnorderedList',false,null); document.execCommand('insertUnorderedList',false,null); document.execCommand('unlink');
              savedSelection = saveSelection();
            }
          });

          const checklistButton = document.getElementById('checklist');
          checklistButton.addEventListener('mousedown', e => e.preventDefault());
          checklistButton.addEventListener('click', async e => {
            e.preventDefault();
            const u = auth.currentUser; if (!u) return;
            try {
              const uDoc = await db.collection('users').doc(u.uid).get();
              if (!uDoc.exists || !uDoc.data().subscriber) { categoryOverlay.style.display = 'block'; stripeModal.style.display = 'block'; return; }
            } catch(e) { return; }
            const sel = window.getSelection(); let rangeToUse = null;
            if (savedSelection && noteText.contains(savedSelection.startContainer)) rangeToUse = savedSelection.cloneRange();
            else if (sel?.rangeCount > 0) { const r = sel.getRangeAt(0); if (noteText.contains(r.startContainer)) rangeToUse = r.cloneRange(); }
            if (!rangeToUse) { rangeToUse = document.createRange(); rangeToUse.selectNodeContents(noteText); rangeToUse.collapse(false); }
            sel.removeAllRanges(); sel.addRange(rangeToUse);
            const cb = document.createElement('input'); cb.type = 'checkbox'; cb.addEventListener('change', handleCheckboxChange);
            if (!rangeToUse.collapsed) rangeToUse.deleteContents();
            rangeToUse.insertNode(cb); rangeToUse.setStartAfter(cb); rangeToUse.collapse(true); sel.removeAllRanges(); sel.addRange(rangeToUse);
            savedSelection = saveSelection(); saveNoteWithDebounce();
          });

          document.getElementById('font-size').addEventListener('change', function() {
            const selectedSize = this.value;
            if (!savedSelection || !noteText.contains(savedSelection.startContainer)) { this.value = ''; return; }
            const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(savedSelection);
            const sizeMap = {'12px':'12px','14px':'14px','16px':'16px','18px':'18px','20px':'20px'};
            const fontSize = sizeMap[selectedSize] || '14px';
            const range = sel.getRangeAt(0);
            if (range && !range.collapsed) {
              const selContents = range.extractContents();
              const tw = document.createTreeWalker(selContents, NodeFilter.SHOW_ELEMENT, { acceptNode: n => n.style?.fontSize ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
              const toProcess = []; while(tw.nextNode()) toProcess.push(tw.currentNode);
              toProcess.forEach(n => { const p = n.parentNode; while(n.firstChild) p.insertBefore(n.firstChild,n); if(p) p.removeChild(n); });
              const span = document.createElement('span'); span.style.fontSize = fontSize; span.appendChild(selContents); range.insertNode(span);
              cleanupFontSizeSpans(span); range.collapse(false); sel.removeAllRanges(); sel.addRange(range);
            }
            savedSelection = saveSelection(); saveNoteWithDebounce();
            setTimeout(() => { this.value = ''; }, 100);
          });

          document.getElementById('contact').addEventListener('click', () => window.open('https://landowski.github.io/notepad-pro/privacy', '_blank'));
        });
      });
    });
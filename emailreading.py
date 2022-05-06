#modules
import imaplib
import email

username ="enviandoemailpi3@gmail.com"
app_password= "projetointegrador3"

gmail_host= 'imap.gmail.com'

mail = imaplib.IMAP4_SSL(gmail_host)

mail.login(username, app_password)

mail.select("INBOX")

#select specific mails
_, selected_mails = mail.search(None, '(FROM "enviandoemailpi3@gmail.com")')

#total number of mails from specific user
print("Total Messages from enviandoemailpi3@gmail.com:" , len(selected_mails[0].split()))

stringlist = []

for num in selected_mails[0].split():
    _, data = mail.fetch(num , '(RFC822)')
    _, bytes_data = data[0]

    #convert the byte data to message
    email_message = email.message_from_bytes(bytes_data)
    stringlist.append(email_message["subject"])

mail.logout()

floatlist = [float(i)for i in stringlist]

print(floatlist)

soma = sum(floatlist)
media = soma / len(floatlist)

print(soma)
print(media)

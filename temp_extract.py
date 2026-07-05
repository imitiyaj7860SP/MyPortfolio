from pypdf import PdfReader
r = PdfReader('public/assets/resume.pdf')
print('pages', len(r.pages))
for i in range(len(r.pages)):
    print('--- PAGE', i+1, '---')
    text = (r.pages[i].extract_text() or '')
    print(text[:18000])
    print()

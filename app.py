from flask import Flask, render_template, request
from time import sleep
from work import Validator, File

app = Flask(__name__)


def verify(function, user_code):
    file_handler = File()

    file_handler.save(user_code)
    sleep(1)

    vd = Validator(
        indata=[(4, 2), (9, 3), (20, 5), (3, 0)],
        outdata=[6, 12, 25, 3],
    )

    execution = vd.get_outputs(file_handler.get_function(function))

    sleep(1)

    file_handler.delete()

    return execution


@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == "POST":
        user_code = request.form.get('code')
        execution = verify("add", user_code)
        return render_template("home.html", res=execution)
    return render_template("home.html", res={})
    

if __name__ == '__main__':
    app.run(debug=True)

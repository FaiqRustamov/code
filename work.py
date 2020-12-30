import random
import os


class Validator:
    def __init__(self, indata, outdata):
        self.indata = indata  # in - input
        self.outdata = outdata  # out - output

    def validate(self, function):
        total_passed_tests = 0

        for input_data, output_data in zip(self.indata, self.outdata):
            try:
                if function(*input_data) == output_data:
                    total_passed_tests += 1
            except:
                continue

        if total_passed_tests == len(self.indata):
            return True
        else:
            return False

    def get_outputs(self, function):
        total_passed_cases = 0
        exception = ""

        for input_data, output_data in zip(self.indata, self.outdata):
            try:
                if function(*input_data) == output_data:
                    total_passed_cases += 1
                else:
                    exception = "Wrong output!"
            except Exception as e:
                exception = str(e)

        passed_percent = total_passed_cases / len(self.indata) * 100
        is_passed = True if passed_percent == 100.0 else False
        problems = "No Exception" if not exception else exception

        return {
            "success": is_passed,
            "pass_percent": round(passed_percent, 2),
            "problems": problems,
        }


class File:
    SYMBOLS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    ID_LEN = 16
    BASE_FILENAME = "user_code"

    def __init__(self):
        self.filename = self.__get_filename()

    def __get_filename(self):
        symbs_list = [random.choice(self.SYMBOLS) for _ in range(self.ID_LEN)]
        file = f"{self.BASE_FILENAME}-{''.join(symbs_list)}.py"
        return file

    def save(self, function):
        with open(self.filename, "w") as code_file:
            code_file.write(function)

    def delete(self):
        if os.path.exists(self.filename):
            os.remove(self.filename)

    def get_function(self, function):
        return __import__(self.filename[:-3]).__getattribute__(function)

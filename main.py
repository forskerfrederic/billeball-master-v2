def on_button_pressed_a():
    global Radiogruppe
    Radiogruppe = 101
    for index in range(8):
        radio.set_group(Radiogruppe)
input.on_button_pressed(Button.A, on_button_pressed_a)

Radiogruppe = 0
basic.show_string("m")
import sympy as sp

def integrationMethod(p):
    x = sp.symbols('x', real=True)
    value = sp.integrate(p, x)
    return value
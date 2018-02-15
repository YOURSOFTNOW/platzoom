# Platzom

Platzom es un idioma inventado para el 
[Curso de funcamentos de JS](https://platzi.com/js) 
de [Platzi](https://platzi.com), el mejor lugar de educacion online

## Descripcion del idioma
- Si la palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra inicia con "Z", se le aniade "pe" al final.
- Si la palabra traducida tiene 10 o mas letras, se debe partir en
dos por la mitad y unir con un guion medio.
- Por ultimo, si la palabra original es un palindromo, ninguna 
regla anterior cuenta y se devuelve la misma palabra pero 
intercalando letras mayusculas y minusculas


## Instalacion
```
npm install platzom
```


## Uso

```
import platzom from 'platzom'

platzom("Programar") //Program
platzom("Zorro") //Zorrope
platzom("Zarpar") //Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos") //SoMeTeMos
```

## Creditos
- [Emilio Torrez](https://facebook.com/emiliotorrez)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
const heroGridItemStyle = {height:{xs:'35vh',sm:'70vh'},display:'flex',flexDirection:'column',gap:1,alignItems:'center',justifyContent:'center'}

export const headerStyles ={
    gridContainerStyle:{width:'100%'},
    avatarGridStyle:{...heroGridItemStyle},
    avatarStyle:{height:{xs:150,sm:250},width:{xs:150,sm:250}},
    titleStyle:{fontSize:36,textAlign:'center'},
    subTitleStyle:{fontSize:28,textAlign:'center'},
    textStyle:{...heroGridItemStyle,padding:{xs:2,sm:10}},
    typographyText:{fontSize:36}
}
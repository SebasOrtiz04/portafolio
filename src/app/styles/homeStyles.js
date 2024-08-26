const heroGridItemStyle = {height:{xs:'35vh',sm:'70vh'},display:'flex',flexDirection:'column',gap:1,alignItems:'center',justifyContent:'center'}

export const headerStyles ={
    gridContainerStyle:{width:'100%'},
    avatarGridStyle:{...heroGridItemStyle},
    avatarStyle:{height:{xs:150,sm:300},width:{xs:150,sm:300}},
    titleStyle:{fontSize:{xs:42,sm:48},textAlign:'center'},
    subTitleStyle:{fontSize:{xs:28,sm:40},textAlign:'center'},
    textStyle:{...heroGridItemStyle,padding:{xs:2,sm:10}},
    typographyText:{fontSize:36}
}
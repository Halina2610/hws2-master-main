import React from 'react'
import {Slider, SliderProps} from '@mui/material'



const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#8B8B8B', // Цвет слайдера
                width: '147px',
                height: '4px',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#FFF', // Цвет ползунка
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#8B8B8B', // Цвет трека до ползунка
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#0C2', // Цвет трека после ползунка
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

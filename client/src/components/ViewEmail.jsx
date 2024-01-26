


import { API_URLS } from '../services/api.url';
import useApi from '../hooks/useApi';
import { Box, Typography, styled } from '@mui/material';
import { useOutletContext, useLocation } from 'react-router-dom';
import { emptyProfilePic } from '../constants/constant';
import { ArrowBack, Delete } from '@mui/icons-material';

const IconWrapper = styled(Box)({
    padding: 15
});

const Subject = styled(Typography)({
    fontSize: 22,
    margin: '10px 0 20px 75px',
    display: 'flex'
})

const Indicator = styled(Box)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-left: 6px;
    padding: 2px 4px;
    align-self: center;
`;

const Image = styled('img')({
    borderRadius: '50%',
    width: 40,
    height: 40,
    margin: '5px 10px 0 10px',
    backgroundColor: '#cccccc'
});


const Container = styled(Box)({
    marginLeft: 15,
    //width: '100%',
    display: 'flex'
});


const Wrapper = styled(Box)({
    display : 'flex',
   // width: '100%',
    '& > p > span': {
        fontSize: 12,
        color: '#5E5E5E'
    }
})

const Date = styled(Typography)({
    margin: '0 50px 0 auto !important',
    fontSize: 12,
    color: '#5E5E5E'
})


export const ViewEmail = () => {

    const { openDrawer } = useOutletContext();
    
    const { state } = useLocation();
    const { email } = state;

    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
    const deleteEmailsService = useApi(API_URLS.deleteEmails); 

    console.log(email.type);
    
    const deleteEmail = () => {
        if(!email.bin)
            moveEmailsToBinService.call([email._id]);
        else{
            deleteEmailsService.call([email._id]);
        }
        window.history.back();
    }

    return (
                <Box style={ openDrawer ? { marginLeft : 250,width : '100%'} : { width: '100'}}>
                    <IconWrapper>
                        <ArrowBack onClick={()=> window.history.back()} color="action" fontSize="small"/>
                        <Delete fontSize='small' color="action" style={{ marginLeft: 40 }} onClick={()=>deleteEmail()}/>
                    </IconWrapper>
                    <Subject>
                        {email.subject} <Indicator component="span">Inbox</Indicator>
                    </Subject>
                    <Container>
        
                        <Image src={emptyProfilePic} alt="dp"/>
         {/* calc(100% - 250px)               */}
                        <Box style={{width:'100%'}}>  
                            <Wrapper>
                                <Typography>{email.name}
                                    <Box component="span">&nbsp;&#60; {email.to} &#62;</Box>
                                </Typography>
                                <Date>
                                    {(new window.Date(email.date)).getDate()}&nbsp;
                                    {(new window.Date(email.date)).toLocaleString('default',{month:'long'})}&nbsp;
                                    {(new window.Date(email.date)).getFullYear()}
                                </Date>
                            </Wrapper>
                            <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
                        </Box>
                    </Container>
                </Box>
            )
        }


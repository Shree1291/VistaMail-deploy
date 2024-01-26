import { useState } from "react";
import { Dialog, Box, Typography, styled, InputBase, TextField } from "@mui/material";
import {Close, DeleteOutline} from "@mui/icons-material";

import useApi from '../hooks/useApi';

import { API_URLS } from "../services/api.url";


const dialogStyle = {
    height: '80%',
    width: '70%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0', 
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#DCF2F1',
    '& > p':{
        fontSize: 14, 
        fontWeight: 500
    }
});

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div':{
        fontSize: 14,
        borderBottom: '1px solid #F3EEEA', 
        marginTop: 10
    }
});

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    alignItems: 'center'
});

const SendButton = styled(Box)({
    background: '#0B60B0',
    color: '#F3F8FF',
    fontWeight: '500',
    textTransform: 'none',
    borderRadius: '18px',
    width: "70px",
    height: "30px",
    display: "flex",
    alignItems: "center",  
})
const ComposeMail = ({openDialog, setOpenDialog}) =>{
    const [data, setData] = useState({});

    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const sentDraftService = useApi(API_URLS.saveDraftEmails);

    const config = {
           Host : "smtp.elasticemail.com",
            Username : "shrirambirajdar1291@gmail.com",
            Password : "FB7231CD2DBB531117BBE3756EF695E07029",
            Port: 2525, 
    }
    const closeComposeMail = (e) =>{
        e.preventDefault();
        

        
        const payload = {
            to : data.to,
            from:'shrirambirajdar1291@gmail.com',
            subject : data.subject,
            body : data.body,
            date : new Date(),
            image : '',
            name : 'Shriram Birajdar',
            starred : false,
            type : 'drafts'
        
        }

        sentDraftService.call(payload);

        if(sentDraftService.error){
            setOpenDialog(false);
            setData({});
        }else{
            
        }
        setOpenDialog(false);
    }

    
    const onValueChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value}) 
    }

    const sendMail = async(e) => {
        e.preventDefault();

        if(window.Email){ 
         window.Email.send({
            ...config,
            To : data.to,
            From : "shrirambirajdar1291@gmail.com",
            Subject : data.subject,
            Body : data.body
            

        }).then(
          message => alert(message)
        );
        }

        const payload = {
            to : data.to,
            from:'shrirambirajdar1291@gmail.com',
            subject : data.subject,
            body : data.body,
            date : new Date(),
            image : '',
            name : 'Shriram Birajdar',
            starred : false,
            type : 'sent'
        
        }

        sentEmailService.call(payload);

        if(sentEmailService.error){
            setOpenDialog(false);
            setData({});
        }else{
            
        }
        setOpenDialog(false); 
    }

    return(
        <Dialog
          open = {openDialog}
          PaperProps={{sx: dialogStyle}}
        >
           <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)}/>
           </Header>
           <RecipientsWrapper>
                <InputBase placeholder="Recipients" name = "to" onChange={(e) => onValueChange(e)}/>
                <InputBase placeholder="Subject" name = "subject" onChange={(e) => onValueChange(e)}/>
           </RecipientsWrapper>
           <TextField 
                multiline
                rows = {16}
                sx= {{'& .MuiOutlinedInput-notchedOutline': {border: 'none'}}}
                onChange={(e) => onValueChange(e)}
                name = "body"
           />
           <Footer>
            <SendButton onClick={(e) => sendMail(e)} style={{display: "flex", justifyContent: "center"}}>Send</SendButton>
            <DeleteOutline onClick={()=> setOpenDialog(false)}/>
           </Footer>
        </Dialog> 
    )
}

export default ComposeMail;
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../../../styles/index';

const Container = ({
    title, 
    actionLabelText, 
    actionButtonText, 
    onPressActionButton, 
    children,
}) => {
    return (
        <View style={styles.containerLista}>
            {title && 
            <Text style={styles.containerListaTitulo} >{title}</Text>}
            {children}

            {(actionLabelText || actionButtonText) && (

            <View style={styles.actionContainerLista}>

                {actionLabelText && (
    <Text style={styles.actionLabel}>{actionLabelText}</Text>
    )}

    {actionButtonText && (
           <TouchableOpacity style={styles.actionButton}
           onPress={onPressActionButton}>
    <Text style={styles.actionButtonText}>{actionButtonText}</Text>
           </TouchableOpacity>
           )}
           </View>  
           
            )}
        </View>
    );
};

export default Container

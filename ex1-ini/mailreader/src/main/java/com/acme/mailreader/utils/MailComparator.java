package com.acme.mailreader.utils;

import java.util.Comparator;

import com.acme.mailreader.model.Mail;

/**
 * Comparateur de mails
 * 
 * Comme on dÃ©sire afficher les mails les plus importants en premier, l'element le plus grand retourne une valeur nÃ©gative
 *
 */
public class MailComparator implements Comparator<Mail> {

	public int compare(Mail mail1, Mail mail2) {
		if(oneMailIsNull(mail1,mail2))
		{
			return 0;
		}
		if (mailImportantIsDifferent(mail1, mail2)) {
			if (mail1MoreImportant(mail1, mail2)) {
				return -1;
			} else {
				return 1;
			}
		}
		if (mail1.getStatut() != mail2.getStatut()) {
			return returnComp(mail1, mail2);
		}
		if (mail1.getSujet() != mail2.getSujet()) {
			return mail1.getSujet().compareTo(mail2.getSujet());
		}
		return mail2.getDate().compareTo(mail1.getDate());
	}
	
	public boolean oneMailIsNull(Mail mail1, Mail mail2)
	{
		if (mail1.isImportant() != mail2.isImportant()) {
			return true;
		}
		return false;
	}
	
	public boolean mailImportantIsDifferent(Mail mail1, Mail mail2)
	{
		if(mail1MoreImportant(mail1, mail2)) {
			return true;
		} else {
			return false;
		}
	}
	
	public boolean mail1MoreImportant(Mail mail1, Mail mail2)
	{
		if (mail1.isImportant() && !mail2.isImportant()) {
			return false;
		} else {
			return true;
		}
	}
	
	public int returnComp(Mail mail1, Mail mail2)
	{
		int comp = mail1.getStatut().ordinal()
				- mail2.getStatut().ordinal();
		return comp > 0 ? -1 : 1;
	}
	

}

package com.woro2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class StartupOnBootUpReceiver extends BroadcastReceiver {

    public void onReceive(Context context, Intent intent){
        if(Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            Intent activityIntent = new Intent(context, MainActivity.class);
            activityIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(activityIntent);
            Log.i("Mytag", "------ tried to launch MainActivity -------");
        }
    }
}
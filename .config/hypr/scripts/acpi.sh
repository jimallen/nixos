#!/usr/bin/env bash

#"{'text': '$text', 'alt': '$alt', 'tooltip': '$tooltip' }"



status=`cat /sys/firmware/acpi/platform_profile`
tooltip="<b>Power Profile</b>\n<b>Fn+l</b> - 🌙 Low-power mode \n<b>Fn+m</b> - 🔋 Balanced mode \n<b>Fn+h</b> - ⚡ Performance mode "

test="test"
echo "{\"text\":\"$status\", \"tooltip\":\"$tooltip\", \"alt\": \"$status\"}"

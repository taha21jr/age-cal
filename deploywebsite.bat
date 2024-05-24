if exist D:\STATIC_WEBSITE\ (
  echo "Removing folder and creating new folder"
  rmdir /Q /S "D:\STATIC_WEBSITE"
  md D:\STATIC_WEBSITE
) else (
  echo "Folder not exist"
)
echo "Creating STATIC_WEBSITE folder"
md D:\STATIC_WEBSITE
xcopy "C:\ProgramData\Jenkins\.jenkins\workspace\Age_Cal" "D:\STATIC_WEBSITE" /s /e /Y

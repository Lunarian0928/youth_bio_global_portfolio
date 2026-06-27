import segmentation_models_pytorch as smp

from .dataset import NUM_CLASSES


def build_model(encoder_name="resnet50", encoder_weights="imagenet", in_channels=1, classes=NUM_CLASSES):
    """U-Net + ResNet-50 backbone 모델 생성."""
    model = smp.Unet(
        encoder_name=encoder_name,
        encoder_weights=encoder_weights,
        in_channels=in_channels,
        classes=classes,
    )
    return model
